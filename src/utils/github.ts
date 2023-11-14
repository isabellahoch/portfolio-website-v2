import axios from 'axios';
import { load } from 'cheerio';

// different proxy options to bypass GitHub CORS errors
// *it would be nice if they just had an API that did this instead!!*

// const GITHUB_URL = 'https://github.com/users/isabellahoch/contributions';
// const GITHUB_URL = 'https://thingproxy.freeboard.io/fetch/http://github.com/users/isabellahoch/contributions';

// DEV
// const GITHUB_URL = 'https://this-is-just-a-cors-test.tiiny.site/';
// const GITHUB_URL = 'https://purple-crow.static.domains/githubcom-isabellahoch-contri';

// PROD
// const GITHUB_URL = 'https://urlreq.appspot.com/req?method=GET&url=https%3A%2F%2Fgithub.com%2Fusers%2Fisabellahoch%2Fcontributions';
// const GITHUB_URL = 'https://cors-proxy.htmldriven.com/?url=https%3A%2F%2Fgithub.com%2Fusers%2Fisabellahoch%2Fcontributions';

const GITHUB_URL = `${process.env.PUBLIC_URL}/github_contributions.html`;

export interface Datapoint {
  x: number
  y: number
  name?: string
}

export interface ActivityResult {
  contributions: number
  history: Datapoint[]
}

export const monthNames = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const UPWARD_CONSTANT = 3;

function parseContributions(text: string): Datapoint {
  const refDate = new Date();

  const regex = /(\d+)\s*contributions\s+on\s+(\w+\s+\d{1,2}(?:st|nd|rd|th))/i;
  const match = text.match(regex);

  if (match != null) {
    const contributions = parseInt(match[1], 10);
    const dateString = match[2].replace(/(\d+)(st|nd|rd|th)/, '$1');
    const date = new Date(`${dateString}`);

    refDate.setFullYear(date.getFullYear());

    const year = (new Date()).getFullYear();

    if (date.getTime() > refDate.getTime()) {
      date.setFullYear(year - 1);
    } else {
      date.setFullYear(year);
    }

    return { x: date.getTime(), y: UPWARD_CONSTANT + contributions };
  }
  // No match found
  return { x: 0, y: UPWARD_CONSTANT };
}

export const getActivity = async (): Promise<ActivityResult> => {
  try {
    // get reference date 3 months ago in UTC
    const ref = new Date();
    ref.setDate(ref.getDate() - 90);

    // Request GitHub contribution data
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const response = await axios.get(GITHUB_URL, { headers: { Accept: '*/*' } });
    const { data } = response;

    // Parse HTML
    const html = load(data);

    const activityData: Datapoint[] = [];

    let numberOfContributions = 0;

    const contributionsElement = html('h2.mb-2');

    if (contributionsElement.length > 0) {
      const text = contributionsElement.text();

      // Use regular expressions to extract the number
      const match = text.match(/(\d+)\s*contributions\s*in\s*the\s*last\s*year/);

      if (match != null) {
        numberOfContributions = parseInt(match[1], 10);
        // You can store the number or use it as needed
      } else {
        console.log('No match found for contributions count.');
      }
    } else {
      console.log('Element with contributions count not found.');
    }

    // Loop through HTML elements and generate activity data
    html('.ContributionCalendar-day .sr-only').each((_i, el) => {
      // console.log('el', html(el).text());
      const parsedDataPoint = parseContributions(html(el).text());
      // console.log('pdt', parsedDataPoint);
      // eslint-disable-next-line max-len
      // if (!Number.isNaN(parsedDataPoint.x) && !Number.isNaN(parsedDataPoint.y) && parsedDataPoint.x !== 0 && parsedDataPoint.x >= ref.getTime()) {
      //   activityData.push(parsedDataPoint);
      // }
      // eslint-disable-next-line max-len
      if (!Number.isNaN(parsedDataPoint.x) && !Number.isNaN(parsedDataPoint.y) && parsedDataPoint.x !== 0) {
        activityData.push(parsedDataPoint);
      }
    });

    const sortedActivities = activityData
      .sort((a, b) => a.x - b.x)
      .filter((datapoint) => datapoint.x >= ref.getTime());

    for (let i = 5; i < sortedActivities.length; i += 5) {
      const dateObject = new Date(sortedActivities[i].x);
      if (window.innerWidth < 600) {
        sortedActivities[i].name = `${dateObject.getMonth()}/${dateObject.getDate()}`;
      } else {
        sortedActivities[i].name = `${monthNames[dateObject.getMonth()]} ${dateObject.getDate()}`;
      }
    }

    const result = {
      contributions: numberOfContributions,
      history: sortedActivities,
    };

    return result;
  } catch (error) {
    throw new Error('Error fetching GitHub contributions, see server logs.');
  }
};

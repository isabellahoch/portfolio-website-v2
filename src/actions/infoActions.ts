/* eslint-disable max-len */
import { type Action } from 'redux';
import { type ThunkAction } from 'redux-thunk';
import { type RootState } from '../reducers';
import {
  FETCH_ABOUT_REQUEST, FETCH_ABOUT_SUCCESS, FETCH_ABOUT_FAILURE, FETCH_BADGES_REQUEST, FETCH_BADGES_SUCCESS, FETCH_BADGES_FAILURE,
} from '../types/infoActions';
import { type BadgeEntry } from '../types/Info';

// Define action interfaces
interface FetchAboutRequestAction extends Action<typeof FETCH_ABOUT_REQUEST> {}
interface FetchAboutSuccessAction extends Action<typeof FETCH_ABOUT_SUCCESS> {
  payload: string
}
interface FetchAboutFailureAction extends Action<typeof FETCH_ABOUT_FAILURE> {
  payload: string
}

// Define badges action interfaces
interface FetchBadgesRequestAction extends Action<typeof FETCH_BADGES_REQUEST> {}
interface FetchBadgesSuccessAction extends Action<typeof FETCH_BADGES_SUCCESS> {
  payload: Record<string, BadgeEntry> | object
}
interface FetchBadgesFailureAction extends Action<typeof FETCH_BADGES_FAILURE> {
  payload: string
}

export type InfoAction = FetchAboutRequestAction | FetchAboutSuccessAction | FetchAboutFailureAction | FetchBadgesRequestAction | FetchBadgesSuccessAction | FetchBadgesFailureAction;

// Action creators
export const fetchAboutRequest = (): FetchAboutRequestAction => ({
  type: FETCH_ABOUT_REQUEST,
});

export const fetchAboutSuccess = (about: string): FetchAboutSuccessAction => ({
  type: FETCH_ABOUT_SUCCESS,
  payload: about,
});

export const fetchAboutFailure = (error: string): FetchAboutFailureAction => ({
  type: FETCH_ABOUT_FAILURE,
  payload: error,
});

export const fetchBadgesRequest = (): FetchBadgesRequestAction => ({
  type: FETCH_BADGES_REQUEST,
});

export const fetchBadgesSuccess = (badges: Record<string, BadgeEntry> | object): FetchBadgesSuccessAction => {
  console.log('payload');
  console.log(typeof badges);
  return ({
    type: FETCH_BADGES_SUCCESS,
    payload: badges,
  });
};

export const fetchBadgesFailure = (error: string): FetchBadgesFailureAction => ({
  type: FETCH_BADGES_FAILURE,
  payload: error,
});

const API_KEY = process.env.REACT_APP_API_KEY != null ? process.env.REACT_APP_API_KEY : '';
const API_URL = process.env.REACT_APP_API_URL != null ? process.env.REACT_APP_API_URL : '';

export const fetchAbout = (): ThunkAction<void, RootState, unknown, InfoAction> => async (dispatch) => {
  dispatch(fetchAboutRequest());

  try {
    const response = await fetch(`${API_URL}/info/about`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();

    dispatch(fetchAboutSuccess(data));
  } catch (error) {
    dispatch(fetchAboutFailure('Error fetching about.'));
  }
};

export const fetchBadges = (query: string): ThunkAction<void, RootState, unknown, InfoAction> => async (dispatch) => {
  fetchBadgesRequest();

  try {
    const response = await fetch(`${API_URL}/info/badges?key=${query}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();
    console.log(data);

    dispatch(fetchBadgesSuccess(data));
  } catch (error) {
    dispatch(fetchBadgesFailure('Error fetching badges.'));
  }
};

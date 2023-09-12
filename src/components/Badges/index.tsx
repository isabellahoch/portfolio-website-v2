import React from 'react';
import Badge from './Badge';

type Entry = Record<string, string>;

type Section = Record<string, Entry>;

interface Props {
  badges: Section | object
}

const BadgesSection: React.FC<Props> = ({ badges }) => {
  const data = badges as Section;
  return (
    <div>
      {Object.keys(data).map((sectionKey) => (
        <div key={sectionKey}>
          <h2>{sectionKey}</h2>
          <div>
            {Object.entries(data[sectionKey]).map(([key, val]) => (
              <Badge key={key} badgeName={key} badgeUrl={val} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgesSection;

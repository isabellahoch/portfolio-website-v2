import React from 'react';
import Badge from './Badge';

interface BadgeEntry {
  id: string
  title: string
  url: string
  category: string
}

type Section = Record<string, BadgeEntry[]>;

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
              <Badge key={key} badgeName={val.title} badgeUrl={val.url} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgesSection;

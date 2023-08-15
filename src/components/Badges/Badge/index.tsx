import React from 'react';

interface Props {
  badgeName: string
  badgeUrl: string
}

const Badge: React.FC<Props> = ({ badgeName, badgeUrl }) => (
  <img src={badgeUrl} alt={badgeName} />
);

export default Badge;

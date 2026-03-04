import React from 'react';

// Define the props for the TeamCard component
type TeamCardProps = {
  school: string;
  name: string;      // mascot name
  city: string;
  state: string;
};

// TeamCard component displays information for a single college basketball team
const TeamCard: React.FC<TeamCardProps> = ({ school, name, city, state }) => {
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <h4>{name}</h4>
      <p>
        {city}, {state}
      </p>
    </div>
  );
};

export default TeamCard;

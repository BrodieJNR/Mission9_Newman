import React from 'react';
import TeamCard from './TeamCard';
import teamsDataRaw from '../CollegeBasketballTeams.json';

// Define the Team type structure based on JSON data
type Team = {
  tid?: number;
  cid?: number;
  did?: number;
  school: string;
  name: string;       // mascot name
  abbrev?: string;
  pop?: number;
  city: string;
  state: string;
  latitude?: number;
  longitude?: number;
};

// TeamsList component fetches data from JSON and renders all team cards
const TeamsList: React.FC = () => {
  // Safely parse the imported JSON data and ensure it's an array
  const teams: Team[] = Array.isArray(teamsDataRaw)
    ? teamsDataRaw
    : Array.isArray((teamsDataRaw as any).teams)
      ? (teamsDataRaw as any).teams
      : [];

  return (
    <section className="teams-list">
      {teams.map((team) => (
        <TeamCard
          key={team.school}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </section>
  );
};

export default TeamsList;



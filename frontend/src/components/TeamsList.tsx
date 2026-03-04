import React from 'react';
import TeamCard from './TeamCard';
import teamsData from '../CollegeBasketballTeams.json';

type Team = {
  school: string;
  name: string;
  city: string;
  state: string;
  // add other fields here if they exist in the JSON, but these are the ones we need
};

const TeamsList: React.FC = () => {
  const teams = teamsData as Team[];

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

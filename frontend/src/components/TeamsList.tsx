import React from 'react';
import TeamCard from './TeamCard';
import teamsDataRaw from '../CollegeBasketballTeams.json';

type Team = {
  school: string;
  name: string;
  city: string;
  state: string;
};

const TeamsList: React.FC = () => {
  const teams: Team[] = Array.isArray(teamsDataRaw) ? teamsDataRaw : [];

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


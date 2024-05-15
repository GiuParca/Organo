import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState ([
    {
      id: uuidv4(),
      name: 'Development',
      color: '#569a83'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#082b3d'
    },
    {
      id: uuidv4(),
      name: 'Innovation and Management',
      color: '#FFEEDF'
    },
    {
      id: uuidv4(),
      name: 'Communication',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Finance',
      color: '#E06B69'
    }
  ])

  const initial = [
    {
      id: uuidv4(),
      name: 'Vera Furtado',
      position: 'Senior Web Designer',
      image: './images/team-5.png',
      team: teams[0].name

    },
    {
      id: uuidv4(),
      name: 'João Abreu',
      position: 'Software Developer',
      image: './images/team-3.jpg',
      team: teams[0].name

    },
    {
      id: uuidv4(),
      name: 'Henrique Castro',
      position: 'Software Developer',
      image: './images/team-4.jpg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Ana Medeiros',
      position: 'Machine Learning Engineer',
      image: './images/team-1.jpg',
      team: teams[1].name

    },
    {
      id: uuidv4(),
      name: 'Sophie Turner',
      position: 'Data Architect',
      image: './images/team-2.jpg',
      team: teams[1].name

    },
    {
      id: uuidv4(),
      name: 'Barbara Souza',
      position: 'Business Intelligence Specialist',
      image: './images/team-7.jpg',
      team: teams[1].name

    },
    {
      id: uuidv4(),
      name: 'Flavia Dutra',
      position: 'Social Media Manager',
      image: './images/team-9.jpg',
      team: teams[3].name

    },
    {
      id: uuidv4(),
      name: 'Carlos Sá',
      position: 'Chief Marketing Officer',
      image: './images/team-8.jpg',
      team: teams[3].name

    },

  ]

  const [collaborators, setCollaborators] = useState(initial);

  function deleteTeamMember(id) {
      setCollaborators(collaborators.filter(teamMember => teamMember.id !== id));
  }

  function changeTeamColor(color, id){
    setTeams(teams.map(team =>{
      if(team.id === id){
        team.color = color;
      }
      return team;
    }));
  }

  function registerTeam(name, color){
    setTeams([...teams, {name, color, id: uuidv4()}])
  }

  return (
    <div>
      <Banner />
      <Form 
      registerTeam = {registerTeam}
      teams={teams.map(team => team.name)} 
      addedTeamMember={teamMember => setCollaborators([...collaborators, teamMember])} 
      />
      <section className='teams'>
        {teams.map((team, index) =>
          <Team
            key={index}
            team={team}
            changeColor={changeTeamColor}
            collaborators={collaborators.filter(teamMember => teamMember.team === team.name)}
            onDelete={deleteTeamMember}
          />
        )}
      </section>
    </div>
  );
}

export default App;

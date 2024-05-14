import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [teams, setTeams] = useState ([
    {
      name: 'Development',
      color: '#569a83'
    },
    {
      name: 'Data Science',
      color: '#082b3d'
    },
    {
      name: 'Innovation and Management',
      color: '#FFEEDF'
    },
    {
      name: 'Communication',
      color: '#FFBA05'
    },
    {
      name: 'Finance',
      color: '#E06B69'
    }
  ])

  const initial = [
    {
      name: 'Giulia Parca',
      position: 'Junior Full-Stack Developer',
      image: 'https://github.com/GiuParca.png',
      team: teams[0].name
    },
    {
      name: 'Vera Furtado',
      position: 'Senior Web Designer',
      image: './images/team-5.png',
      team: teams[0].name

    },
    {
      name: 'João Abreu',
      position: 'Software Developer',
      image: './images/team-3.jpg',
      team: teams[0].name

    },
    {
      name: 'Henrique Castro',
      position: 'Software Developer',
      image: './images/team-4.jpg',
      team: teams[0].name
    },
    {
      name: 'Ana Medeiros',
      position: 'Machine Learning Engineer',
      image: './images/team-1.jpg',
      team: teams[1].name

    },
    {
      name: 'Sophie Turner',
      position: 'Data Architect',
      image: './images/team-2.jpg',
      team: teams[1].name

    },
    {
      name: 'Barbara Souza',
      position: 'Business Intelligence Specialist',
      image: './images/team-7.jpg',
      team: teams[1].name

    },
    {
      name: 'Flavia Dutra',
      position: 'Social Media Manager',
      image: './images/team-9.jpg',
      team: teams[3].name

    },
    {
      name: 'Carlos Sá',
      position: 'Chief Marketing Officer',
      image: './images/team-8.jpg',
      team: teams[3].name

    },

  ]

  const [collaborators, setCollaborators] = useState(initial)

  function deleteTeamMember() {

  }

  function changeTeamColor(color, name){
    setTeams(teams.map(team =>{
      if(team.name === name){
        team.color = color;
      }
      return team;
    }));
  }

  return (
    <div>
      <Banner />
      <Form teams={teams.map(team => team.name)} addedTeamMember={teamMember => setCollaborators([...collaborators, teamMember])} />
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

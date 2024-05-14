import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Development',
      primaryColor: '#569a83',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Data Science',
      primaryColor: '#082b3d',
      secondaryColor: '#ebf5fa'
    },
    {
      name: 'Innovation and Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
    {
      name: 'Communication',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Finance',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    }
  ]

  const initial =[
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
      name: 'Alex Martins',
      position: 'Project Manager',
      image: './images/team-6.jpg',
      team: teams[2].name

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
  const addedTeamMember = (teamMember) =>{
    setCollaborators([...collaborators, teamMember])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} addedTeamMember = {teamMember => addedTeamMember(teamMember)}/>

      {teams.map(team=> <Team 
      key={team.name} 
      name={team.name} 
      primaryColor={team.primaryColor} 
      secondaryColor={team.secondaryColor}
      collaborators={collaborators.filter(teamMember => teamMember.team === team.name )}
      />)}
    </div>
  );
}

export default App;

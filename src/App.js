import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: ''
    },
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

  const [collaborators, setCollaborators] = useState([])
  const addedTeamMember = (teamMember) =>{
    console.log(collaborators)
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

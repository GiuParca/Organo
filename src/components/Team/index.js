import Collaborator from '../Collaborator'
import './team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({team, collaborators, onDelete, changeColor}) => {
    return (
        collaborators.length>0 && <section className='team' style={{backgroundColor: hexToRgba(team.color, '0.6')}}>
            <input onChange={event => changeColor(event.target.value, team.id)}value={team.color}type='color'  className='input-color'/>
            <h3 style={{borderColor:team.backgroundColor}}>{team.name}</h3>
            <div className='collaborators'>
                {collaborators.map((teamMember, index) => {
                    return  <Collaborator
                    key={index}
                    teamMember={teamMember}
                    cardColor={team.color}
                    onDelete ={() => {}}
                />;
                })}
            </div>
        </section>
    )
}

export default Team
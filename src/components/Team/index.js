import Collaborator from '../Collaborator'
import './team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({team, collaborators, onDelete, changeColor}) => {
    return (
        collaborators.length>0 && <section className='team' style={{backgroundColor: hexToRgba(team.color, '0.6')}}>
            <input type='color' className='input-color' value={team.color} onChange={event => {changeColor(event.target.value, team.id);

            }}  />
            <h3 style={{borderColor:team.color}}>{team.name}</h3>
            <div className='collaborators'>
                {collaborators.map((teamMember, index) =>
                <Collaborator
                    key={index}
                    teamMember={teamMember}
                    cardColor={team.color}
                    onDelete ={onDelete}
                />
                )}
            </div>
        </section>
    )
}

export default Team
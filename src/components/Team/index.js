import Collaborator from '../Collaborator'
import './team.css'

const Team = ({team, collaborators, onDelete}) => {
    return (
        collaborators.length>0 && <section className='team' style={{backegroundImage:'url(./images/fundo.png)', backgroundColor: team.primaryColor}}>
            <h3 style={{borderColor:team.backgroundColor}}>{team.name}</h3>
            <div className='collaborators'>
                {collaborators.map((teamMember, index) => {
                    return  <Collaborator
                    key={index}
                    teamMember={teamMember}
                    cardColor={team.backgroundColor}
                    onDelete ={() => {}}
                />;
                })}
            </div>
        </section>
    )
}

export default Team
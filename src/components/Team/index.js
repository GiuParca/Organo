import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css = { background: props.secondaryColor }
    const styling = { borderColor: props.primaryColor }


    return (
        props.collaborators.length>0 && <section className='team' style={css}>
            <h3 style={styling}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(teamMember => (
                    <Collaborator
                        cardColor={props.primaryColor}
                        key={teamMember.name}
                        name={teamMember.name}
                        position={teamMember.position}
                        image={teamMember.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Team
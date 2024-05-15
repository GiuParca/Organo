import './collaborator.css'
import { AiFillCloseCircle } from 'react-icons/ai';
const Collaborator = ({teamMember, cardColor, onDelete}) =>{
    return(
        <div className='collaborator'>  
            <AiFillCloseCircle
            size={25} 
            className="delete" 
            onClick={() => onDelete(teamMember.id)}
            />
            <div className='header' style={{backgroundColor: cardColor}}>
                <img src={teamMember.image} alt={teamMember.name}/>
            </div>
            <div className='footer'>
                <h4>{teamMember.name}</h4>
                <h5>{teamMember.position}</h5>
            </div>
        </div>
    )
}

export default Collaborator
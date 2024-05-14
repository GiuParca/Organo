import { MdDeleteForever } from "react-icons/md";
import './collaborator.css'

const Collaborator = ({teamMember, cardColor, onDelete}) =>{
    return(
        <div className='collaborator'>  
            <MdDeleteForever size={25} className="delete" onClick={onDelete}/>
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
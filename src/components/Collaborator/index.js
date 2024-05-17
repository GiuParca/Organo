import './collaborator.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdFavorite , MdFavoriteBorder } from "react-icons/md";



const Collaborator = ({teamMember, cardColor, onDelete, whenFavorite}) =>{
    function favorite(){
        whenFavorite(teamMember.id);
    }

    const propsfavorite = {
        size: 25,
        onClick: favorite
    }


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
                <div className='favorite'>
                    {teamMember.favorite
                    ? <MdFavorite {...propsfavorite} color='#d92626'/> 
                    : <MdFavoriteBorder {...propsfavorite}/>}
                </div>
            </div>
        </div>
    )
}

export default Collaborator
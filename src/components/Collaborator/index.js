import './Collaborator.css'

const Collaborator = ({image, name, position}) =>{
    return(
        <div className='collaborator'>  
            <div className='header'>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Collaborator
import './TextField.css'

const TextField = (props) => {

    const typed = (event) => {
        props.whenChanged(event.target.value)
    }

    return(
         <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={typed} required={props.mandatory}    placeholder={props.placeholder}/>
         </div>
    )
}

export default TextField
import './textField.css'
 
const TextField = ({label, placeholder, value, onChange, mandatory = false}) => {
    return(
         <div className="text-field">
            <label>
                {label}
            </label>
            <input value={value} onChange={event => onChange(event.target.value)} required={mandatory} placeholder={placeholder}/>
         </div>
    )
}

export default TextField
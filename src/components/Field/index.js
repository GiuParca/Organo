import './field.css'
 
const Field = ({type ='text', label, placeholder, value, whenChanged, mandatory = false}) => {
    return(
         <div className={`field field-${type}`}>
            <label>
                {label}
            </label>
            <input 
            type={type} 
            value={value} 
            onChange={event => whenChanged(event.target.value)} required={mandatory} placeholder={placeholder}/>
         </div>
    )
}

export default Field
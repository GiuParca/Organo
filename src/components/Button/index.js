import './button.css'

const Button = (props) =>{
    return (<button className='SubmitButton' type="submit">
        {props.children}
    </button>

    )
}

export default Button
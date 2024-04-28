import './SubmitButton.css'

const SubmitButton = (props) =>{
    return (<button className='SubmitButton' type="submit">
        {props.children}
    </button>

    )
}

export default SubmitButton
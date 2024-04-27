import './SubmitButton.css'

const SubmitButton = (props) =>{
    return (<button className='SubmitButton'>
        {props.children}
    </button>

    )
}

export default SubmitButton
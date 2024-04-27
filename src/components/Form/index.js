import './Form.css'
import TextField from '../TextField' 
import Dropdown from '../Dropdown'
import SubmitButton from '../SubmitButton'
import { useState } from 'react'

const Form = () => {

    const teams = [
        'Development',
        'Data Science',
        'Innovation and Management',
        'Communication',
        'Finance'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log('Your form has been submitted =>', name, position, image)
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h2>Fill in the details to create the employee card</h2>
                <TextField 
                mandatory={true} 
                label="Name" 
                placeholder="Enter your name" 
                value={name}
                whenChanged={value => setName(value)}
                />
                <TextField 
                mandatory={true} 
                label="Position" 
                placeholder="Enter your position" 
                value={position}
                whenChanged={value => setPosition(value)}
                />
                <TextField 
                label="Image" 
                placeholder="Enter the image url" 
                value={image}
                whenChanged={value => setImage(value)}
                />
                <Dropdown 
                mandatory={true} 
                label="Team" 
                itens={teams}
                value={team}
                whenChanged={value => setTeam(value)}
                />
                <SubmitButton text="Create Card">
                    Create Card
                </SubmitButton>
            </form>
        </section>
    )
 
}

export default Form
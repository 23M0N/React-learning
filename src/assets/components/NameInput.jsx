import { useState } from "react"

export default function NameInput() {
    const [name, setName] = useState('')
    function handleNameChange(e) {
        setName(e.target.value)
    }

    const [lastname, setLastName] = useState('')
    function handleLastNameChange(ev) {
        setLastName(ev.target.value)
    }
    return (
        <>
        <div>type ur name
            <input type="text" onChange={handleNameChange}/>
            <p>so your name is {name}</p>
        </div>
        <div>type ur last name
            <input type="text" onChange={handleLastNameChange}/>
            <p>so ur last name is {lastname}</p>
        </div>
        </>
    )
}
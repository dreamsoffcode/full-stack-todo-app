import { useState } from "react"

export default function CreateTodo(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    function addTodo(){
        fetch('http://localhost:3000/todo', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description
            })
        })
        .then((response)=>{
            response.json()
            .then((response)=>{
                console.log(response)
            })
        })
    }
    return <div>
        <input type="text" placeholder="Title" onChange={(event)=>setTitle(event.target.value)}></input>
        <br />
        <br />
        <input type="text" placeholder="Description" onChange={(event)=>setDescription(event.target.value)}></input>
        <br />
        <br />
        <button onClick={addTodo}>Add Todo</button>
    </div>
}
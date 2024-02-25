export default function Todo(props){
    const {todo, todos, setTodos} = props
    function markComplete(event){
        todo.completed = event.target.checked
        fetch('http://localhost:3000/completed', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                id: todo._id,
                completed: todo.completed
            })
        }).then(response=>{
            return response.json()
        }).then(response=>console.log(response))
        setTodos(todos.map(currTodo=>{
            if(currTodo._id == todo._id){
                return todo
            }
            return currTodo
        }))
    }
    return (
        <div>
            {todo.title}
            <br />
            {todo.description}
            <br />
            <input type="checkbox" checked={todo.completed} onChange={markComplete}/>Mark complete
            <br />
        </div>
    )
}
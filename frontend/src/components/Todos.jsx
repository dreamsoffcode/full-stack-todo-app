import Todo from './Todo'
export default function Todos(props){
    const {todos, setTodos} = props
    return (
        <div>
            {todos.map(todo=>{
                return <Todo key={todo._id} todo={todo} todos={todos} setTodos={setTodos}/>
            })}
        </div>
    )
}
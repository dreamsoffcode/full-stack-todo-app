import { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import './App.css'

 function App() {

  async function fetchData(){
    const res = await fetch('https://full-stack-todo-app-backend-blue.vercel.app/todos')
    const resObj = await res.json()
    return resObj.todos
  }
  
  const [todos, setTodos] = useState([])

  //leads to infinite fetc requests
  useEffect(()=>{
    setInterval(()=>fetchData().then(responseTodos=>setTodos(responseTodos)), 5000)
  }, [])
  


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  )
}

export default App

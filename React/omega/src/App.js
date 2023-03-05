import React, { useState } from 'react'

export default function App() {
  const [task,setTask] = useState("")
  const [todos,setTodos] = useState([1,2,3])
  const Handletodo =()=>{
    if(task !== ""){
      setTodos([...todos,task])
      setTask("")
    }
  }
  return (
    <div>
      <h1>Add Todo List</h1>
      <input type="text" placeholder='Enter Todo' 
      value={task} onChange={(e)=>{setTask(e.target.value)}}/>
      <button onClick={Handletodo}>Add</button>
      <div>
        <ul>
          {todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

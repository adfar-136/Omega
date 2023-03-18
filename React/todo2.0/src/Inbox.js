import React, { useRef, useState } from 'react'

export default function Inbox(props) {
  const [newTask,setNewTask] = useState(false)
  const titleRef = useRef()
  const calendarRef = useRef()
  const newTaskHandler=()=>{
    setNewTask(true)
  }
  const addHandler=(e)=>{
    e.preventDefault()
    if(titleRef.current.value === ""){
        alert('Please enter a task')
        return;
    }
    let newObj = {
        number : props.list.length + 1,
        title:titleRef.current.value,
        date :new Date(calendarRef.current.value)
    }
    props.append(newObj)
    setNewTask(false)
  }
  const cancelHandler=()=>{
    setNewTask(false)
  }
  return (
    <div>
       <h2>Inbox</h2>
       {!newTask && <button onClick={newTaskHandler}>+ADDNEW</button>}
       {newTask && (
        <form>
            <input type="text" ref={titleRef}/>
            <div>
                <button onClick={(e)=>{addHandler(e)}}>Add Task</button>
                <button onClick={cancelHandler}>Cancel</button>
                <input type="date" ref={calendarRef} defaultValue="2023-03-01" />
            </div>

        </form>
       )}
       <div>
        {props.list.map((list)=>{
            return (
                <div key={list.number}>
                  <div>{list.title} ({list.date.toLocaleDateString()})</div>
                </div>
            )
        })}
       </div>
    </div>
  )
}

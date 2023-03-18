import React from 'react'

export default function Today(props) {
    const date = new Date()
    const filteredList = props.list.filter((task)=>{
        if(date.getFullYear() !== task.date.getFullYear()){
            return false;
        }
        if(date.getMonth() !== task.date.getMonth()){
            return false;
        }
        if(date.getDate() !== task.date.getDate()){
            return false
        }
        return true;

    })
  return (
    <div>
        <div>
            <h1>Tasks of today's date</h1>
            {filteredList.map((list)=>{
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

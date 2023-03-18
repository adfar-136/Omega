import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'

export default function MainSection(props) {
    const list = [
        {number:1,title:"Lets Complete this",date: new Date("03/09/2023")},
        {number:2,title:"Should sleep at 9",date: new Date("03/01/2023")},
        {number:3,title:"Complete react project",date: new Date("01/09/2023")}
    ]
    const [filteredList,setFilteredList]= useState(list)
    const addToList =(obj)=>{
        list.push(obj)
        setFilteredList(list)
    }
  return (
    <div>
      {props.active === "INBOX" && (
        <Inbox list={filteredList} append={addToList}/>
      )}
      {props.active === "TODAY" && (
        <Today list = {filteredList}/>
      )}
      {props.active === "NEXT" && (
        <Next7Days list={filteredList}/>
      )}
    </div>
  )
}

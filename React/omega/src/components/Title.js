import React from 'react'

export default function Title(props) {
  return (
    <div>
      {props.arr.map((x,i)=>{
        return <li>{x}</li>
      })}
    </div>
  )
}

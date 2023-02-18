import React from 'react'

export default function Blog(props) {
  let state= {
    count:0,
    name:"adfar"
  }
  return (
    <div>
        {state.count}
        <p>{props.name } {props.age}</p>
    </div>
  )
}

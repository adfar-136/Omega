import React from 'react'

export default function About(props) {
  return (
    <div>
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.gravity}</li>
        </ul>
    </div>
  )
}

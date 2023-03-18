import React from 'react'

export default function Profile(props) {
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <button>Logout</button>
    </div>
  )
}

import React from 'react'

export default function Skills(props) {
    const skilllist = props.skills.map((x)=>{
        return (
            <ol>
             {x.map((y)=>{
                return <li>{y}</li>
             })}
            </ol>
        )
    })
  return (
    <div>{skilllist}</div>
  )
}

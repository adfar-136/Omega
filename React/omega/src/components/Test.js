import React from 'react'

export default function Test() {
    const arr = [1,2,3,4,5,6,5,3,4,5,2,1]
  return (
    <div>{arr.map((item,index)=>{
        return (
            <li key={index}>{item}</li>
        )
    })}</div>
  )
}

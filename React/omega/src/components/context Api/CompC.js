import React from 'react'
import { firstname,lastname } from '../../App'
export default function CompC() {
  return (
    <>
      <firstname.Consumer>
        {(fname)=>{
            return (
                <lastname.Consumer>
                    {(lname)=>{
                        return (<h1>My Name is {fname} {lname}</h1>)
                    }}
                </lastname.Consumer>
            )
        }}
      </firstname.Consumer>
    </>
  )
}

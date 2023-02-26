import React, { useContext } from 'react'
import CompC from './CompC'
import { firstname,lastname } from '../../App'


export default function CompB() {
    const fname = useContext(firstname)
    const lname = useContext(lastname)
  return (
    <div>
        <h1>My Name is {fname} {lname}</h1>
        <CompC/>
    </div>
  )
}

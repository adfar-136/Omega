import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)
    const fun =useCallback(()=>{
        console.log("adfar")
    },[counterTwo])
    const IncrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    
  return (
    <div>
       <Child counterTwo={counterTwo} fun={fun}/>
       <button onClick={IncrementOne}>Counter : {counterOne}</button>
    </div>
  )
}

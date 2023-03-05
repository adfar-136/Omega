import { useState } from "react"

const useCounter = ()=>{
    const [count,setCount] = useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        setCount(count-1)
    }
    return {
        count:0,
        increment:increment,
        decrement:decrement
    }
}
export default useCounter
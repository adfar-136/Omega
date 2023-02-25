import React from 'react'
import { useReducer } from 'react'
const counterReducer=(state,action)=>{
  console.log("state",state)
  console.log("Action", action)
  switch(action){
    case "one":
      return state+1;
    case "two":
      return state+2;
    case "minusone":
      return state-1;
    default:
      return state
  }

}
export default function App() {
  // const [first, setfirst] = useState(0)
  const [state,dispatch] = useReducer(counterReducer,0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>{dispatch("one")}}>one</button>
      <button onClick={()=>{dispatch("two")}}>two</button>
      <button onClick={()=>{dispatch("minusone")}}>minusone</button>
    </div>
  )
}

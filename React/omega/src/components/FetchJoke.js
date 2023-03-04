
import axios from 'axios'
import React, { useState } from 'react'

export default function FetchJoke() {
    const [joke,setJoke] = useState("")
//   const getJoke =()=>{
//     fetch("https://official-joke-api.appspot.com/random_joke").then(
//         (response)=>response.json()).then(
//             (data)=>{
//                setJoke(data.setup + " " + data.punchline)
//             })
//   }
     const getJoke =()=>{
       axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
        console.log(response)
        setJoke(response.data.setup + " " + response.data.punchline)
    }) 
     }
  return (
    <div>
        <h1>{joke}</h1>
        <button onClick={getJoke}>Generate Joke</button>
    </div>
  )
}

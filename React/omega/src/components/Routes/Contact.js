import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


export default function Contact() {
  const navigate = useNavigate()
  const gotoAbout =()=>{
    navigate("/about")
  }
  return (
    <div>
       
        <h1>Contact Page</h1>
        <button onClick={gotoAbout}>Go to About page</button>
        <Outlet/>
    </div>
  )
}

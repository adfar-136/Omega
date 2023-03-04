import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Contact() {
  return (
    <div>
       
        <h1>Contact Page</h1>
        <Outlet/>
    </div>
  )
}

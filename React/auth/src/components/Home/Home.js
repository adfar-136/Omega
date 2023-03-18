import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="/login">Login</Link> <br /><br />
      <Link to="/signup">SignUp</Link>
    </div>
  )
}

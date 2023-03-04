import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
            <a href="/">Logo</a>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/adfar">Adfar</NavLink></li>
                    
                </ul>
            </nav>
        </header>
    </div>
  )
}

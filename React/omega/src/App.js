import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/Routes/About'
import Adfar from './components/Routes/Adfar'
import Contact from './components/Routes/Contact'

import "./App.css"
import Users from './components/Routes/Users'
import UserDetails from './components/Routes/UserDetails'
import Blog from './components/Routes/Blog'
import Search from './components/Routes/Search'
import MainHome from './components/Routes/MainHome'
import Home from './components/Routes/Home'

export default function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<MainHome/>}>
            <Route index element={<Home/>}/> 
            <Route path='about' element={<About/>}/> 
            <Route path='/contact' element={<Contact/>}>
              <Route path='blog' element={<Blog/>}/> 
              <Route path='search' element={<Search/>}/> 
            </Route> 
            
            <Route path='adfar' element={<Adfar/>}/> 
            <Route path='users' element={<Users/>}/>
            <Route path='users/:id' element={<UserDetails/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

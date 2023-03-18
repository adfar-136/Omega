import React, { useState } from 'react'
import Inptform from '../InputForm/Inptform'
import styles from "./signup.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default function SignUp() {
  const [values,setValues] = useState({
    name : "",
    email:"",
    password:""
  })
  const [errorMsg,setErrorMsg] = useState("")
  const navigate = useNavigate()
  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.password){
      setErrorMsg("Fill all fields")
      return;
    }
    
    setErrorMsg("")
    createUserWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
      const user =res.user
      console.log(user)
      updateProfile(user,{
        displayName : values.name
      })
      navigate("/")
    }).catch((err)=>{
      setErrorMsg(err.message)
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className='styles.heading'>SignUp</h1>
        <Inptform label="Name" type="text" placeholder = "Enter Your Name" 
        onChange={(event)=>{setValues((prev)=>({...prev,name:event.target.value}))}}/>
        <Inptform label="Email" type="email" placeholder = "Enter Your Email" 
        onChange={(event)=>{setValues((prev)=>({...prev,email:event.target.value}))}}/>
        <Inptform label="Password" type="password" placeholder = "Enter Your Password" 
        onChange={(event)=>{setValues((prev)=>({...prev,password:event.target.value}))}}/>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission}>SignUp</button>
          <p>Already have an account?{" "}
           <span>
            <Link to="/login">Login</Link>
           </span>
          </p>

        </div>
      </div>
    </div>
  )
}

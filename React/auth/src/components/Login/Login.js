import React,{useState} from 'react'
import Inptform from '../InputForm/Inptform'
import styles from "./login.module.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
export default function Login() {
  const [values,setValues] = useState({
    email:"",
    password:""
  })
  
  const [errorMsg,setErrorMsg] = useState("")
  const navigate = useNavigate()
  const handleSubmission =()=>{
    if(!values.email || !values.password){
      setErrorMsg("Fill all fields")
      return;
    }
    setErrorMsg("")
    signInWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
      navigate("/todo")
    }).catch((err)=>{
      setErrorMsg(err.message)
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className='styles.heading'>Login</h1>
        <Inptform label="Email" type="email" placeholder = "Enter Your Email" 
        onChange={(event)=>{setValues((prev)=>({...prev,email:event.target.value}))}}/>
        <Inptform label="Password" type="password" placeholder = "Enter Your Password" 
        onChange={(event)=>{setValues((prev)=>({...prev,password:event.target.value}))}}/>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission}>Login</button>
          <p>Already have an account?{" "}
           <span>
            <Link to="/signup">SignUp</Link>
           </span>
          </p>

        </div>
      </div>
    </div>
  )
}

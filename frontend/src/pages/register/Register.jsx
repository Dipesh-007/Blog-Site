import "./register.css"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";



export default function Register() {
  const history = useHistory();
  const [username,setname] =useState()
  const [email,setEmail] =useState()

  const [password,setpassword] =useState()


  const handleSubmit =async(e)=>{

e.preventDefault()
try {
  
  const res = await axios.post('http://localhost:5000/api/auth/register',{
    username,
    email,
    password
  })
  const err='User with dipesh@gmail.com already exist'
  
  console.log(res.data)
  {res.data.msg!==err && history.push('/login')}
} catch (error) {
  console.log(error)
}

  }

   

 
  
  return (
       

          
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)}/>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)} />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  )
}

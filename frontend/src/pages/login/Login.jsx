import "./login.css";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";
import { unset } from 'lodash'


export default function Login() {


  const history = useHistory();

  const [email,setEmail] =useState()

  const [password,setpassword] =useState()

  const handleSubmit =async(e)=>{

    e.preventDefault()
    try {
      
      const res = await axios.post('http://localhost:5000/api/auth/login',{
        
        email,
        password

      })
      // const err='User with dipesh@gmail.com already exist'
      
      console.log(res.data.exist)
      localStorage.setItem("success",JSON.stringify(res.data.success))
      delete res.data.exist.password;
      
      localStorage.setItem("User",JSON.stringify(res.data.exist))
      // console.log(Use)

      // localStorage.setItem("user",res.data)
      // console.log(localStorage.getItem('user'))
     


      if(res.data.success){
        history.push('/')
      }
      // {res.data.msg!==err && history.push('/login')}
    } catch (error) {
      console.log(error)
    }
    
      }


  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password"  onChange={(e)=>setpassword(e.target.value)}/>
        <button className="loginButton"  type="submit">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}

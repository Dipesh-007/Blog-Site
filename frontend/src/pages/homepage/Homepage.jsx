import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from 'axios'

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);

   const [post,setpost] =useState([])


   
   const {search} =useLocation()


  useEffect(()=>{

   const fetchPost =async ()=>{
   
    const res =await axios.get("http://localhost:5000/api/post/"+search)
     
   
    setpost(res.data);
    // console.log(post," ye hai ");     
     

   }
   fetchPost()
 
  },[search])


  return (
    <>

   

      <Header />
      <div className="home">
        {post && <Posts post={post}/>}
        </div>
        <Sidebar />
     
    </>
  );
}

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";
import axios from 'axios'

export default function SinglePost() {
  const location =useLocation()
  // console.log(location.pathname.split('/')[2])
  const path =location.pathname.split('/')[2]
  const pf='http://localhost:5000/images/'

  const [title,setTitle] =useState()
  const [desc,setDesc] =useState()
  const [upload,setUpload] =useState(false)
 


const [post,setpost] =useState([])

  useEffect(()=>{
    const fetchPost =async ()=>{
   
      const res =await axios.get(`http://localhost:5000/api/post/${path}`)
  
      setpost(res?.data);
      setTitle(res.data?.title)
      setDesc(res.data?.desc)
      console.log(res.data," ye hai",path);     
       
  
     }
     fetchPost()



  },path)

  const User =JSON.parse(localStorage.getItem('User'))
  console.log(User)

  // console.log(User)

  const handleDelete=async(e)=>{
    e.preventDefault()
    // const User =JSON.parse(localStorage.getItem("User"))
    // console.log(req.body.params)
try{

  await axios.delete('http://localhost:5000/api/post/'+path,{data:{username:User.name}})

  window.location.replace("/")
}
catch(err){
  console.log(err)
}
    // window.location.replace("/")

  }

  const handleEdit=async(e)=>{
   
    setUpload(true)

   
  }

  const handleLoad =async(e)=>{
    e.preventDefault()

    try{
      await axios.put('http://localhost:5000/api/post/'+path,{
      username:User.name,
      title,
      desc,

    
    })
   
    }
    catch(err){
      console.log(err)
    }

    setUpload(false)
  }






  return (
    <div className="singlePost">
      <div className="singlePostWrapper">

        {post?.photo && (<img
          className="singlePostImg"
          src={pf+post?.photo}
          alt=""
        />)}

        {upload ? (<textarea className="singlePostTit" value={title} onChange={(e)=>setTitle(e.target.value)}/>):
        (<h1 className="singlePostTitle">
          {post&& title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={handleEdit}></i>
            <i className="singlePostIcon far fa-trash-alt"onClick={handleDelete}></i>
          </div>
        </h1>)}
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">

              <Link className="link" to={`/?username=${post?.username}`}>
               {post&&post?.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post?.createdAt).toString().slice(0,16)}</span>
        </div>
       {upload ?  (<textarea className="singlepostdesc" value={desc}  onChange={(e)=>setDesc(e.target.value)}></textarea>)
        :(
          <p className="singlePostDesc">
          {post&& desc}
          </p>)}

          {upload && (
            <div className="center">
          <button className="Upload " onClick={handleLoad}>Upload</button>
          </div>
          )}
      </div>
    </div>
  );
}

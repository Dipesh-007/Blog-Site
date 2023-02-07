import axios from "axios";
import { useState } from "react";
import "./write.css";

export default function Write() {

  const [file,setfile]=useState()
  const [title,setTitle]=useState()
  const [desc,setDesc]=useState()


const handlesubmit =async(e)=>{
  e.preventDefault()
 const User=JSON.parse(localStorage.getItem('User'))

  const newPost={
    username:User.name,
    title,
    desc
  }
  if(file){
    const data =new FormData()
    const filename= Date.now()+file.name
    data.append('name',filename)
    data.append('file',file)
    newPost.photo=filename

    try{
      const payload= await axios.post('http://localhost:5000/api/upload/',data)
    }
    catch(err){
      console.log(err)

    }

    try{
      const res =await axios.post('http://localhost:5000/api/post/',newPost)
      window.location.replace('/post/'+res.data._id)
    }
    catch(err){
      console.log(err)

    }


  }
    

  console.log(User.name)
  
    

}




  return (
    <div className="write">

      {file && 

      (<img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
      />)

      }
      <form className="writeForm" onSubmit={handlesubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" onChange={(e)=>setfile(e.target.files[0])} type="file" style={{ display: "none" } } />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story"
            type="text"
            autoFocus={true}
            onChange={(e)=>setDesc(e.target.value)}

          />
        <button className="writeSubmit" type="submit" >
          Publish
        </button>
        </div>
      </form>
    </div>
  );
}

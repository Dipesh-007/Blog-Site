// const User = require("./model/Users")
const router=require("express").Router()
const bcrypt = require('bcryptjs');
const { json } = require("express");
const Post =require("./model/Post")

router.post('/',async(req,res)=>{
    const post = new Post(req.body)
    
  
        try {

            const savedpost= await post.save()
 
            res.status(200).json(savedpost)

        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    
   }
 )


router.put('/:id',async(req,res)=>{
    
    
    try {
        const post =await Post.findById(req.params.id)
        if(post.username===req.body.username){
        const updatedPost =await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true})
        res.status(200).json(updatedPost)
    } 
    else{
        res.status(401).json('Not Allowed')
    }
} catch (error) {
    res.status(500).json(error)
       
   }
  

})



router.delete('/:id',async(req,res)=>{
    
    
    try {
        const post =await Post.findById(req.params.id)
        if(post.username===req.body.username){
        await post.delete()
        res.status(200).json('post has been deleted ')
    } 
    else{
        res.status(401).json('Not Allowed')
    }
} catch (error) {
    res.status(500).json(error)
       
   }
  

})

router.get('/:id',async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        // console.log(user)
        // res.send(user)
        
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
         
    }

})




router.get('/',async(req,res)=>{
    const username =req.query.user;
    const catname=req.query.cat;
    try {
        let post

        if(username){
            // console.log(username)

           post = await Post.find([username])
        }
        else if(catname){
            post= await Post.find({categories:{
                $in:[catname],
            }})
        }
        else{
            post = await Post.find()
        }

        // console.log(post)
        res.status(200).json(post) 

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
         
    }

})







module.exports = router

const router=require("express").Router()
const bcrypt = require('bcryptjs');
const User = require("./model/Users")
// const express=require('express');
// const Router=express.Router();

router.post("/register", async(req,res)=>{
    try{   
         
        var salt =await bcrypt.genSaltSync(10);
        var secPas = bcrypt.hashSync(req.body.password, salt);
        
        let p=await User.findOne({email:req.body.email});
        
        if(p){
            let msg=`User with ${req.body.email} already exist`;
            res.send({msg});
        }
        else{
        user= await User.create({
            username:req.body.username,
            email:req.body.email,
            password:secPas,
     
        });
        res.json(user);
    }
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})



router.post('/login', async (req, res) => {
    try{
        let success=false;
        const email=req.body.email;
         
        const exist=await User.findOne({email});
        if(!exist){
            return res.status(401).json({success});
        }
        const r=await bcrypt.compare(req.body.password, exist.password);
        if(!r){
            return res.status(401).send("Wrong password");
        }
        
        success=true
        req.user=exist 
        // console.log(req.user)
        // const pass=req.body.password
       
        res.status(200).json({exist,success});
    }
    catch(err){
        res.send("Server error");
        console.log(err);
    }
});



module.exports = router
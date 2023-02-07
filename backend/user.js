const User = require("./model/Users")
const router=require("express").Router()
const bcrypt = require('bcryptjs');
const { json } = require("express");
const Post =require("./model/Post")

router.put('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id){
        if(req.body.password){
            var salt =await bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);

        }
        try {

           const update=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
           },{new:true})

            res.status(200).json(update)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    else{res.status(401).json('you can ony update your own account')}
})


router.delete('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id){
        try{
            const user =await User.findById(req.params.id)
        
        
        try {
            await Post.deleteMany({username:user.username})

           await User.findByIdAndDelete(req.params.id)

            res.status(200).json("user deleted")
        } catch (error) {
            res.status(400).json(error)
        }}
        catch(err){
            res.status(404).json("User not found!")
        }
    }
    else{res.status(401).json('you can ony update your own account')}
})

router.get('/:id',async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        console.log(user)
        // res.send(user)
        const {password,...other} =user._doc
        res.status(200).json(other)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
         
    }

})





module.exports = router

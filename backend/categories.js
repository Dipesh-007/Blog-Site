const Category =require("./model/Category")
const router=require("express").Router()

router.post("/",async(req,res)=>{
    const newcat=new Category(req.body)

    try{
        const savecat =await newcat.save()
        res.status(200).json(savecat)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }

})

router.get("/",async(req,res)=>{
    // const newcat=new Category(req.body)

    try{
        const cat =await Category.find()
        res.status(200).json(cat)
    }
    catch(err){
        // console.log(err)
        res.status(500).json(err) 
    }

})



module.exports = router

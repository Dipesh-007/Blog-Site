const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const auth =require("./auth")
const app = express()
const port = 5000
const user =require('./user')
const post =require('./post')
const path =require('path')
const cat =require('./categories')
const multer =require('multer')
const cors = require('cors') 



app.use(cors())
// console.log('hello') 
app.use(express.json())
app.use("/api/auth",auth)
app.use("/api/user",user)
app.use("/api/post",post)
app.use("/api/cate",cat)
app.use('/images',express.static(path.join(__dirname,"/images")))
// app.use(express.json())




const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images")
  },filename:(req,file,cd)=>{
    cd(null,req.body.name)
  },
})

const upload=multer({storage:storage})
app.post('/api/upload',upload.single("file"),(req,res)=>{
  res.status(200).json('file uploaded')
})

// app.use("/api/auth",auth)



app.listen(port, () => {
    console.log(`Daily Records backend listening at http://localhost:${port}`)
  })
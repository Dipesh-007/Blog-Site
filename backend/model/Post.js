const mongoose = require('mongoose');

const Post= new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,
      
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        // required:true,
        default:'',
    },
    category:{
        type:Array,
        default:'',
    }
    
},
{timestamps:true},
)

module.exports =mongoose.model("Post",Post);
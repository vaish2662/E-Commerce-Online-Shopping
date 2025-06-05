const mongoose= require('mongoose')
let categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    }
},{timestamps:true})
module.exports=mongoose.model("categories",categorySchema)
const userModel=require('../models/userModel')
const jwt= require('jsonwebtoken')

const requireSignIn=(req,res,next)=>{
    try{
        let decode= jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next()
    }catch(error){
        res.status(500).send(error)
    }
}

const isAdmin=async (req,res,next)=>{
    try{
        let user= await userModel.findById(req.user._id)
        if(user.role!==1){
            res.status(400).send({
                success:false,
                message:"Not an authorized user"
            })
        }else{
            next()
        }
    }catch(error){
        res.status(500).send(error)
    }
}


module.exports={requireSignIn,isAdmin}
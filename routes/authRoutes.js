const express= require('express')
const { registerController,loginController,forgotPasswordController, testController, getAllUsersController } = require('../controllers/authControllers')
const { requireSignIn, isAdmin } = require('../middlewares/authMiddlewares')
const router= express.Router()

router.post("/register",registerController)
router.post("/login", loginController)
router.post("/forgotpass",forgotPasswordController)
router.get("/test",requireSignIn,isAdmin,testController)
router.get("/allusers",getAllUsersController)
router.get("/userauth",(req,res)=>{
    res.status(200).send({ok:true})
})
router.get("/adminauth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

module.exports=router
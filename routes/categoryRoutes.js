const express= require('express')
const {createCategorycontroller,getAllCategoriesController,getSingleCategoriesController,updateCategoryController,deleteCategoryController} = require('../controllers/categoryControllers')
const {requireSignIn,isAdmin } = require('../middlewares/authMiddlewares')
const router= express.Router()

router.post("/create-category",requireSignIn,isAdmin,createCategorycontroller)
router.get("/all-categories",getAllCategoriesController)
router.get("/single-category/:slug",getSingleCategoriesController)
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
module.exports=router
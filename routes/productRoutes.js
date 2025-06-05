const express= require('express')
const { requireSignIn, isAdmin } = require('../middlewares/authMiddlewares')
const {createProductcontroller,getAllProductsController,getSingleProductController,filterProductController,
    getProductPhotoController,updateProductController,deleteProductController,searchProductController} = require("../controllers/productControllers")
const formidable = require('express-formidable')

const router= express()



router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductcontroller)
router.get("/all-products",getAllProductsController)
router.get("/single-product/:slug",getSingleProductController)
router.get("/product-photo/:pid",getProductPhotoController)
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController)
router.delete("/delete-product/:pid",requireSignIn,isAdmin,deleteProductController)
router.get("/search-product/:key",searchProductController)
router.post("/filter-product",filterProductController)
module.exports=router
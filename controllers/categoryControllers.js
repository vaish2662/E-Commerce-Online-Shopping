const slugify = require('slugify')
const categoryModel= require("../models/categoryModel")

const createCategorycontroller= async(req,res)=>{
    try{
        const {name}=req.body
        if(!name){
            res.status(404).send({Error:"Name is required"})
        }
        let existingcategory=await categoryModel.findOne({name})
        if(existingcategory){
            res.status(200).send({
                success:true,
                message:"Category already exists"
            })
        }
        let category= await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:"New Category created successfully",
            category
        })
    }catch(error){
        res.status(500).send({
            success:false,
            message:"Error in create new category"
        })
    }
}

const getAllCategoriesController=async(req,res)=>{
    try{
        let categories=await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:"Got all categories",
            categories
        })

    }catch(error){
        res.status(500).send({
            success:false,
            message:"Error in getting all categories"
        })
    }
}

const getSingleCategoriesController=async(req,res)=>{
    try{
        let category=await categoryModel.findOne(req.params)
        res.status(200).send({
            success:true,
            message:"Got Category",
            category
        })

    }catch(error){
        res.status(500).send({
            success:false,
            message:"Error in getting category"
        })
    }
}

const updateCategoryController=async(req,res)=>{
try{
    const {name}=req.body
    const {id}= req.params
    let category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
    res.status(200).send({
        success:true,
        message:"Category updated successfully",
        category
    })
}catch(error){
    res.status(500).send({
            success:false,
            message:"Error in updating the category"
        })
}
}

const deleteCategoryController=async(req,res)=>{
    try{
    const {id}= req.params
    let category=await categoryModel.findByIdAndDelete(id)
    res.status(200).send({
        success:true,
        message:"Category deleted successfully",
        category
    })
    }catch(error){
       res.status(500).send({
            success:false,
            message:"Error in deleting the category"
        })  
    }
}

module.exports={createCategorycontroller,getAllCategoriesController,getSingleCategoriesController,updateCategoryController,deleteCategoryController}
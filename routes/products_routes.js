const express = require("express");

const router = express.Router();
const Product = require("../modals/productModal");

router.get("/product", async (req,res)=>{
    let data = await Product.find();
    try{
        res.json({
            status : "success",
            data : data,
        })
    }catch(err){
        res.json({
            status : "failure",
            message : err.message
        })
    }
})

router.get("/product/:product_type", async (req,res)=>{
    let data = await Product.findOne({id : req.params.product_type});
    try{
        res.json({
            status : "success",
            data : data,
        })
    }catch(err){
        res.json({
            status : "failure",
            message : err.message
        })
    }
})
router.get("/product/:product_type", async (req,res)=>{
    let data = await Product.findOne({type : req.params.product_type});
    try{
        res.json({
            status : "success",
            data : data,
        })
    }catch(err){
        res.json({
            status : "failure",
            message : err.message
        })
    }
})
router.put("/:name/:quantity", async (req,res)=>{
    let data = await Product.updateOne({name : req.params.name},{quantity : req.params.quantity});
    try{
        res.json({
            status : "success",
            data : data,
        })
    }catch(err){
        res.json({
            status : "failure",
            message : err.message
        })
    }
})
router.post("/product", async (req,res)=>{
//   console.log(req.body);
    try{
        const data = await Product.create(req.body);
        res.status(200).json({
            status : "success",
            data : data,
        })
    }catch(err){
        res.json({
            status : "failure",
            message : err.message
        })
    }
})
module.exports =  router;
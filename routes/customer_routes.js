const express = require("express");

const router = express.Router();
const Customer = require("../modals/customerModal");

router.get("/customer", async (req,res)=>{
    let data = await Customer.find();
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

router.get("/customer/:customer_id", async (req,res)=>{
    let data = await Customer.findOne({id : req.params.customer_id});
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
router.post("/customer", async (req,res)=>{
//   console.log(req.body);
    try{
        const data = await Customer.create(req.body);
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
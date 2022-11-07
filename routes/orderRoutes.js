const express = require("express");

const router = express.Router();
const Order = require("../modals/orderModal");

router.get("/order", async (req,res)=>{
    let data = await Order.find();
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
router.get("/order/:order_id", async (req,res)=>{
    let data = await Order.findOne({p_id : req.params.order_id});
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
router.post("/order", async (req,res)=>{
//   console.log(req.body);
    try{
        const data = await Order.create(req.body);
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
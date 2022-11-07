const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    c_id : String,
    p_id : String,
    p_name : String,
    quantity : Number
})
const Order= mongoose.model('order',orderSchema);
module.exports= Order;
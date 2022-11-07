const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id : String,
    type : String,
    name : String,
    price : Number,
    quantity : Number
})
const Product= mongoose.model('product',productSchema);
module.exports= Product;
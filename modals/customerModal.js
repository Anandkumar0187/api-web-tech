const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    id : String,
    name : String,
    email : String,
    balance : Number
})
const Customer= mongoose.model('customer',customerSchema);
module.exports= Customer;
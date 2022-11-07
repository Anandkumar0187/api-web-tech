const bodyParser = require("body-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
const productRoutes = require("./routes/products_routes");
const customerRoutes = require("./routes/customer_routes");
const orderRoutes = require("./routes/orderRoutes");
mongoose.connect("mongodb://localhost/api_web_tech_assignment",()=>{
    console.log("conected to database");
});
app.use(express.json());
app.use(bodyParser.json());
app.use("/",productRoutes);
app.use("/",customerRoutes);
app.use("/",orderRoutes);

app.listen(port, ()=>{
    console.log(`app listen at ${port}`);
})
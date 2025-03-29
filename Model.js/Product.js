const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title : String,
    price : Number,
    description : String,
    category : String,
    image : String,
    rating : Number,
    discount : String,
    offerprice :String ,
    reviews : String
});
const Product = mongoose.model("Product",productSchema)
module.exports = Product;
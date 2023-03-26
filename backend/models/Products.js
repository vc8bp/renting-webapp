const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    isPurchasable: {type: Boolean, default: false},
    isRentable: {type: Boolean, default: false},
    maxRent: {type: Number, default: 30},
    stock: {type: Number, required: true},
},{timestamps: true})

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;

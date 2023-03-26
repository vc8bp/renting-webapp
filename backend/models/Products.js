const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    isPurchasable: {type: Boolean, default: false},
    isRentable: {type: Boolean, default: false},
    maxRent: {type: Number, default: 30},
    stock: {type: Number, required: true},
},{timestamps: true})

const User = mongoose.model("users", UserSchema);
module.exports = User;
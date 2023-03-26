const route = require('express').Router()
const Product = require('../models/Products')

route.get('/:type', async (req, res) => {
    const {type} = req.body.params;
    q = Product.find()
    filter = []

    if(type === "rent"){
        filter.push({isRentable: true})
    } else if(type === "buy"){
        filter.push({isPurchasable: true})
    } else {
        res.status(404).json({message: "Not fount"})
    }
    if(filter.length > 0) q = q.find({$and : filter})

    try {
        const products = await q.exec()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "internal server Error"})
    }
})

route.post('/', async (req, res) => {
    try {
        await Product.create(req.body)
        res.status(200).json({message: "Product Added Successfully!!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "internal server Error"})
    }
})

module.exports = route
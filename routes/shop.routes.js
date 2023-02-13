const express = require('express');
const {getProducts, getIndex} = require("../controllers/shop.controller");
const shopRoutes = express.Router();


shopRoutes.get('/', getIndex)
shopRoutes.get('/products', getProducts)


module.exports = shopRoutes;
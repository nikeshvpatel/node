const express = require('express');
const {getProduct} = require("../controllers/product.controller");

const productsRoutes = express.Router();

productsRoutes.get('/:productId', getProduct)

module.exports = productsRoutes;
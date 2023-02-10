const express = require('express');
const {getAddProduct, postAddProduct} = require("../controllers/products.controller");

const adminRoutes = express.Router();

adminRoutes.get('/add-product', getAddProduct)

adminRoutes.post('/add-product', postAddProduct)

module.exports = {adminRoutes};
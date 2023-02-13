const express = require('express');
const {getAddProduct, getProducts, postAddProduct} = require("../controllers/admin.controller");

const adminRoutes = express.Router();

adminRoutes.get('/add-product', getAddProduct)
adminRoutes.get('/products', getProducts)
adminRoutes.post('/add-product', postAddProduct)

module.exports = adminRoutes;
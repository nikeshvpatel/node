const express = require('express');
const {getAddProduct, getProducts, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct} = require("../controllers/admin.controller");

const adminRoutes = express.Router();

adminRoutes.get('/add-product', getAddProduct)
adminRoutes.get('/products', getProducts)
adminRoutes.get('/edit-product/:productId', getEditProduct)
adminRoutes.post('/add-product', postAddProduct)
adminRoutes.post('/edit-product', postEditProduct)
adminRoutes.post('/delete-product/:productId', postDeleteProduct)

module.exports = adminRoutes;
const express = require('express');
const {getProducts} = require("../controllers/products.controller");
const shopRoutes = express.Router();


shopRoutes.get('/', getProducts)


module.exports = {shopRoutes};
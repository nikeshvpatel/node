const express = require('express');
const {getCart, postCart, postCartDeleteItem} = require("../controllers/cart.controller");

const cartRoutes = express.Router();

cartRoutes.get('/', getCart);
cartRoutes.post('/', postCart)
cartRoutes.post('/cart-delete-item/:productId', postCartDeleteItem)
module.exports = cartRoutes;
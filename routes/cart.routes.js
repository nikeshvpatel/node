const express = require('express');
const {getCart, postCart} = require("../controllers/cart.controller");

const cartRoutes = express.Router();

cartRoutes.get('/', getCart);
cartRoutes.post('/', postCart)
module.exports = cartRoutes;
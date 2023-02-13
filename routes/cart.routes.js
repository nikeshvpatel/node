const express = require('express');
const {getCart} = require("../controllers/cart.controller");

const cartRoutes = express.Router();

cartRoutes.get('/', getCart);

module.exports = cartRoutes;
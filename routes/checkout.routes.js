const express = require('express');
const {getCheckout} = require("../controllers/checkout.controller");

const checkoutRoutes = express.Router();

checkoutRoutes.get('/', getCheckout);

module.exports = checkoutRoutes;
const express = require('express');
const {getOrders} = require("../controllers/orders.controller");

const ordersRoutes = express.Router();

ordersRoutes.get('/', getOrders);

module.exports = ordersRoutes;
const express = require('express');
const getPageNotFound = require("../controllers/pageNotFound.controller");

const pageNotFoundRoute = express.Router();

pageNotFoundRoute.use('/', getPageNotFound)

module.exports = pageNotFoundRoute;
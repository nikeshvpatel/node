const express = require('express');
const path = require("path");

const pageNotFoundRoute = express.Router();

pageNotFoundRoute.use('/', (req, res) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

module.exports = pageNotFoundRoute;
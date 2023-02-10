const express = require('express');
const path = require('path');


const {adminRoutes} = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');
const pageNotFoundRoute = require("./routes/pageNotFound.routes");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"))
app.use('/admin', adminRoutes);
app.use('/', shopRoutes);
app.use('/', pageNotFoundRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}`);
})
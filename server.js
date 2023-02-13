const express = require('express');
const path = require('path');


const adminRoutes = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');
const pageNotFoundRoute = require("./routes/pageNotFound.routes");
const productsRoutes = require("./routes/products.routes");
const cartRoutes = require("./routes/cart.routes");
const checkoutRoutes = require("./routes/checkout.routes");
const ordersRoutes = require("./routes/orders.routes");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"))
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', ordersRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/', pageNotFoundRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}`);
})
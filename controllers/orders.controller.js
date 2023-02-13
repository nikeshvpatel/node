function getOrders(req, res) {
    res.status(200).render('shop/orders', {pageTitle: 'Orders', path: '/orders'})
}

module.exports = {getOrders};
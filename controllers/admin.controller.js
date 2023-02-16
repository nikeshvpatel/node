const {Product} = require("../models/product.model");

function getAddProduct(req, res) {
    return res.status(200).render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
}

async function getProducts(req, res) {
    let products = await Product.fetchAll();
    res.status(200)
        .render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        })
}

async function getEditProduct(req, res) {
    const editMode = !!req.query.edit;
    const prodId = req.params.productId;
    const foundProduct = await Product.findById(prodId);
    if (!editMode || !foundProduct) res.redirect('/');
    return res.status(200).render('admin/edit-product', {
        ...foundProduct,
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode
    });
}

async function postAddProduct(req, res) {
    const product = new Product({...req.body, id: null});
    await product.save();
    res.redirect('/');
}

function postEditProduct(req, res) {
    const updatedProduct = new Product({...req.body});
    updatedProduct.save();
    res.redirect('/admin/products');
}

module.exports = {getAddProduct, getProducts, getEditProduct, postAddProduct, postEditProduct};

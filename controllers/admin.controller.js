const Product = require("../models/product.model");

function getAddProduct(req, res) {
    return res.status(200).render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
}

async function getProducts(req, res) {
    try {
        let products = await Product.findAll();
        res.status(200)
            .render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products',
            })
    } catch (e) {
        console.log(`getProducts() -> ${e.message}`);
    }
}

async function getEditProduct(req, res) {
    const editMode = !!req.query.edit;
    const prodId = req.params.productId;
    try {
        const foundProduct = (await Product.findByPk(prodId)).dataValues;
        if (!editMode || !foundProduct) res.redirect('/');
        return res.status(200).render('admin/edit-product', {
            ...foundProduct,
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode
        });
    } catch (e) {
        console.log(`getEditProduct() -> ${e.message}`)
    }
}

async function postAddProduct(req, res) {
    try {
        await Product.create({...req.body})
    } catch (e) {
        console.log(`postAddProduct() -> ${e.message}`)
    }
}

async function postEditProduct(req, res) {
    try {
        await Product.update({...req.body}, {where: {id: req.body.id}})
        res.redirect('/admin/products');
    } catch (e) {
        console.log(`postEditProduct() -> ${e.message}`)
    }
}

function postDeleteProduct(req, res) {
    const productId = req.params.productId;
    try {
        Product.deleteProductById(productId);
        res.redirect('/admin/products');
    } catch (e) {
        console.log(`postDeleteProduct() -> ${e.message}`)
    }
}

module.exports = {getAddProduct, getProducts, getEditProduct, postAddProduct, postEditProduct, postDeleteProduct};

const {Product} = require("../models/product.model");

function getAddProduct(req, res) {
    return res.status(200).render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
}

async function getProducts(req, res) {
    try {
        let [products] = await Product.fetchAll();
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
        const [foundProduct] = await Product.findById(prodId);
        if (!editMode || !foundProduct) res.redirect('/');
        return res.status(200).render('admin/edit-product', {
            ...foundProduct[0],
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode
        });
    } catch (e) {
        console.log(`getEditProduct() -> ${e.message}`)
    }
}

async function postAddProduct(req, res) {
    const product = new Product({...req.body, id: null});
    try {
        await product.save();
        res.redirect('/');
    } catch (e) {
        console.log(`postAddProduct() -> ${e.message}`)
    }
}

async function postEditProduct(req, res) {
    const updatedProduct = new Product({...req.body});
    try {
        await updatedProduct.save();
        res.redirect('/admin/products');
    } catch (e) {
        console.log(`postEditProduct() -> ${e.message}`)
    }
}

function postDeleteProduct(req, res) {
    const productId = req.params.productId;
    Product.deleteProductById(productId);
    res.redirect('/admin/products');
}

module.exports = {getAddProduct, getProducts, getEditProduct, postAddProduct, postEditProduct, postDeleteProduct};

const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')


class Product {

    constructor({title, imageUrl, description, price}) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }


    save() {
        this.id = Math.random().toString();
        fs.readFile(p, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });

    }

    static findById(id) {
        return new Promise(resolve => {
            fs.readFile(p, (err, data) => {
                if (err) {
                    return resolve([]);
                }
                return resolve(JSON.parse(data).find(product => product.id === id));
            })
        })
    }

    static fetchAll() {
        return new Promise((resolve) => {
            fs.readFile(p, (err, data) => {
                if (err) {
                    return resolve([]);
                }
                resolve(JSON.parse(data));
            })
        })
    }
}

module.exports = {Product}
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const fs = require("fs");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
fs.readdir(__dirname + "/public/product_carousel", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            app.use('/product_carousel', express.static(file));
        })
    }
});

// routes

// get all products
app.get("/products", async(req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products");
        res.json(allProducts.rows);
    } catch (err) {
        res.status(500).end();
    }
});

app.get("/productcarousel/:link", (req, res) => {
    try {
        const { link } = req.params;
        const readLinkDir = fs.readdir(`./public/product_carousel/${link}`, (err, files) => {
            if(err) {
                console.error(err);
            }
            res.json(files);
        });
    } catch (err) {
        res.status(500).end();
    }
});

// get specific product by name
app.get("/products/:name", async(req, res) => {
    try {
        const { name } = req.params;
        const product = await pool.query("SELECT * FROM products WHERE product_link = $1", [name]);
        res.json(product.rows[0]);
        console.log(req.params);
    } catch (err) {
        res.status(500).end();
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
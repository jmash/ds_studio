const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const fs = require("fs");

//middleware
app.use(cors());
app.use(express.json());

// routes

// get all products
app.get("/products", async(req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products");
        res.json(allProducts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// // get specific product by id
// app.get("/products/:id", async(req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await pool.query("SELECT * FROM products WHERE product_id = $1", [id]);
//         res.json(product.rows[0]);
//         console.log(req.params);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

app.get("/productcarousel/:link", (req, res) => {
    try {
        const { link } = req.params;
        const linkFiles = [];
        const readLinkDir = fs.readdir(`./product_carousel/${link}`, (err, files) => {
            if(err) {
                console.error(err);
            }
            res.json(files);
        });

    } catch (err) {
        console.error(err.message);
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
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
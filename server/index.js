require('dotenv').config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const pool = require("./db");
const fs = require("fs");
const validInfo = require("./middleware/validInfo");
const authorize = require("./middleware/authorize");
const bcrypt = require("bcrypt");
const jwtGenerator = require("./utils/jwtGenerator");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
fs.readdir(__dirname + "/public/product_carousel", (err, files) => {
    if (err) {
        console.log(err); // TODO: Change this to proper server error response
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

app.post("/register", validInfo, async (req, res) => { // TODO: Create validInfo middleware
    const { email, name, password } = req.body;

    try {
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if(user.rows.length > 0) {
            return res.status(401).json("User already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        let newUser = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, bcryptPassword]
        );

        const jwtToken = jwtGenerator(newUser.rows[0].user_id);

            return res.json({ jwtToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

app.post("/login", validInfo, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential");
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].user_password
      );
  
      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user.rows[0].user_id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
  router.post("/verify", authorize, (req, res) => {
    try {
      res.json(true);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
  module.exports = router;

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
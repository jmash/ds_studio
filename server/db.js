const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jared",
    password: "jurrd",
    host: "localhost",
    port: 5432,
    database: "ds_studio"
});

module.exports = pool;
const Pool = require("pg").Pool; {/*3.Used to configure the library*/}

const pool = new Pool({
    user: "postgres",
    password: "I@mTyler",
    host:"localhost",
    port: 5432,
    database: "todo"
});

module.exports = pool;
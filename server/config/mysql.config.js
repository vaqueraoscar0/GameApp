require('dotenv').config();
const {createPool} = require('mysql');


//Creating a connection
exports.pool = createPool({
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_NUMBER,
    connectionLimit: 10
})

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'us-cdbr-east-05.cleardb.net',
//     user: 'b96e865ee5945e',
//     password: '45b67ad6',
//     database: 'heroku_aff45274dbaf4c7'
// });
//
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
// });




require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env.DATABASE_ACCESS);

module.exports = (db) => {
    mongoose.connect(process.env.DATABASE_ACCESS)
        .then(() => console.log(`Established a connection to ${db} database`))
        .catch(err => console.log("Something went wrong when connecting to the database..."))
}


// module.exports = (db) => {
//     mongoose.connect(`mongodb://localhost/${db}`)
//         .then(() => console.log(`Established a connection to ${db} database`))
//         .catch(err => console.log("Something went wrong when connecting to the database..."))
// }

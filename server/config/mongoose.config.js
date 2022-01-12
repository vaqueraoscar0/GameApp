require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env.DATABASE_ACCESS);

module.exports = (db) => {
    mongoose.connect("mongodb+srv://gameapp:gameapp@cluster0.gmc3m.mongodb.net/GameApp?retryWrites=true&w=majority")
        .then(() => console.log(`Established a connection to ${db} database`))
        .catch(err => console.log("Something went wrong when connecting to the database..."))
}


// module.exports = (db) => {
//     mongoose.connect(`mongodb://localhost/${db}`)
//         .then(() => console.log(`Established a connection to ${db} database`))
//         .catch(err => console.log("Something went wrong when connecting to the database..."))
// }

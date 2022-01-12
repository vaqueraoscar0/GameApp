const db = require('./mysql.config');



try{
    const sql = `INSERT INTO games(title, studio, description, updated_at) VALUES ("jenn","chan","something",NOW())`;
    db.pool.query(sql, function (err,result) {
        if(err) throw err;
        console.log('Data inserted into the table....')
    })

}catch(error){
    console.log(error);
}
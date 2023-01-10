const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "root",
    database: "workshopdb", 
    password: "root",
})

conn.connect(function (err, result) {
    if (err) console.log(err);
    // else { console.log(result);}
});

let sqlQuery = "select * from product"

conn.query(sqlQuery, (err, res) => {
    if(err) console.log(err);
    console.log(res[1]['Name']);
});
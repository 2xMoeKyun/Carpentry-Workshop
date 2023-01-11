const { response } = require('express');
const express = require('express');
const mysql = require('mysql');
var cors = require('cors');

const PORT = process.env.PORT || 3001

const app = express()
const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "workshopdb",
    password: "root",
})


app.use(cors())

app.use(express.json())
async function startApp() {
    try {
        conn.connect(function (err /*, result*/ ) {
            if (err) console.log(err);
            else {
                console.log('Data base connected succesfuly');
            }
        });
        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
startApp()

app.get('/api', (req, res) => {
    const sqlquery = 'select * from product';
    conn.query(sqlquery, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
})

app.post('/api/post', (req, res) => {
    console.log(req.body)
    var {
        name,
        price,
        info
    } = req.body
    const sqlquery = `insert into product (Name, Price, Info) values ('${name}',${price},'${info}');`
    conn.query(sqlquery, (err, result) => {
        if (err) console.log(err);
        else res.json({
            message: "Thanks"
        });
    });

})
// const express = require('express');
// const mysql = require('mysql');
import express from 'express';
import {conn, Connect} from './Database.js';
import router from './router.js';

const PORT = process.env.PORT || 3001

const app = express()


app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {        
        Connect()
        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
startApp()

// app.get('/api', (req, res) => {
//     const sqlquery = 'select * from product';
//     conn.query(sqlquery, (err, result) => {
//         if (err) console.log(err);
//         else res.send(result)
//     });
// })

// app.post('/api', (req, res) => {
//     console.log(req.body)
//     try {
//         var {
//             name,
//             price,
//             info
//         } = req.body; 
//         var prod = new Product('fdsf',22,'dsad');
//         const sqlquery = `insert into product (Name, Price, Info) values ('${name}',${price},'${info}');`
//         conn.query(sqlquery, () => {
//             res.json({
//                 message: "thanks"
//             })
//         })
//     } catch (e) {
//         res.json(e);
//     }
// });
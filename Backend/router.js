import {Router} from "express";
import {conn, Connect} from './Database.js';
import {Product} from './Product.js';

const router = new Router()

router.get('/product', (req, res) => {
    const sqlquery = 'select * from product';
    conn.query(sqlquery, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
})
router.get('/product/:id')
router.post('/product', (req, res) => {
    console.log(req.body)
    try {
        var {
            name,
            price,
            info
        } = req.body;
        var prod = new Product('fdsf', 22, 'dsad');
        const sqlquery = `insert into product (Name, Price, Info) values ('${name}',${price},'${info}');`
        conn.query(sqlquery, () => {
            res.json({
                message: "thanks"
            })
        })
    } catch (e) {
        res.json(e);
    }
});
router.put('/product')
router.delete('/product/:id')

export default router;
const express = require('express');
const router = express.Router();

let htmlForm = `
    <form action="/admin/product" method="POST">
        <input type="text" name="title">
        <button type="submit">send</button>
    </form>
`;

router.get('/add-product', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    res.send(htmlForm)
})
router.post('/product', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    console.log(req.body)
    res.send('<h1>Products</h1>')
    // res.send(`<h2>${req.body.title}</h2>`)
})

module.exports = router;
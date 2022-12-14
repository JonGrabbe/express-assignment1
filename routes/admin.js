const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../helpers/path')

let htmlForm = `
    <form action="/admin/product" method="POST">
        <input type="text" name="title">
        <button type="submit">send</button>
    </form>
`;

const products = [{testing: 'hello there'}]

router.get('/add-product', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    // res.send(htmlForm)
    // products.push({a: req.body.title})
    res.sendFile(path.join(rootDir, 'views', 'products.html'))
})
router.post('/add-product', (req, res, next) => {
    products.push({productTitle: req.body.title})
    res.redirect('/')
})
router.post('/product', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    // console.log(req.body)
    res.send('<h1>Products</h1>')
    // res.send(`<h2>${req.body.title}</h2>`)
})

// module.exports = router;    
exports.routes = router
exports.products = products

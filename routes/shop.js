const express = require('express');
const router = express.Router();
const routes = require('./admin')

router.get('/', (req, res, next) => {
    res.send('<h1>Home</h1>')
    console.log(routes.products)
    console.log('second log')
})

module.exports = router;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))


let htmlForm = `
    <form action="/product" method="POST">
        <input type="text" name="title">
        <button type="submit">send</button>
    </form>
`;

app.use('/add-product', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    console.log(req.body)
    res.send(htmlForm)
})
app.use('/product', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    console.log(req.body)
    res.send('<h1>Products</h1>')
})

app.use((req, res, next) => {
    res.send('<h1>Home</h1>')
    console.log('second log')
})

app.listen(3000)
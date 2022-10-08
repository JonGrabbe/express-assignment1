const express = require('express');
const app = express();


app.use((req, res, next) => {
    // res.send('<h1>About us page</h1>')
    console.log('first log about page')
    next()
})

app.use((req, res, next) => {
    res.send('<h1>hello world hahaah</h1>')
    console.log('second log')
})

app.listen(3000)
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://jongrabbe:DMRH555777@cluster0.wcnibq2.mongodb.net/?retryWrites=true&w=majority')
    .then(result => {
        console.log('connected!!')
        callback(result)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = mongoConnect
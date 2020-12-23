const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/example', { useMongoClient: true}, {useNewUrlParser: true})
    mongoose.connection.on('open',() => {
        console.log('Connected to Mongo')
    })
    mongoose.connection.on('error',(error) => {
        console.log('Mongo Error : ',error)
    })
    mongoose.Promise = global.Promise;
}
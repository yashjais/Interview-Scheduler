const mongoose = require('mongoose')

const setUpDb = () => {
    // mongodb connection configuration
    mongoose.connect('mongodb://localhost:27017/interview-scheduler',{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = setUpDb
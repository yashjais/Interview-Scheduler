const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Student =  mongoose.model('Student', studentSchema)

module.exports = Student
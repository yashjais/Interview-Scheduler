const Student = require('../models/users')

module.exports.list = (req, res) => {
    Student.find()
        .then(student => {
            res.json(student)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Student.findById(id)
        .then(st => {
            if(st) {
                res.json(st)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const student = new Student(body)
    student.save()
        .then(st => {
            res.json(st)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Student.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(st => {
            if(st) {
                res.json(st)
            } else {
                res.json({})
            }
        }) 
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Student.findByIdAndDelete(id)
        .then(st => {
            if(st) {
                res.json(st)
            } else {
                res.json({})
            }
        })
        .catch(st => {
            res.json(st)
        })
}
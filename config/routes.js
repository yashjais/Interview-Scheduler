const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersController')

router.get('/students', usersController.list)
router.get('/students/:id', usersController.show)
router.post('/students', usersController.create)
router.put('/students/:id', usersController.update)
router.delete('/students/:id', usersController.destroy)

module.exports = router
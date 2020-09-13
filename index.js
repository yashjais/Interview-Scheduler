const express = require('express')
const setUpDb = require('./config/database')
const router = require('./config/routes')


setUpDb()

const app = express()
const port = 3010

app.get('/', (req, res) => {
    res.send('welcome to the website')
})


app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('listening on the port', port)
})
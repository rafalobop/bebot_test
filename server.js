const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes')
const cors = require('cors')
const port = 8080
const app = express()

app.use(cors());    
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log('corriendo en el 8080')
})

routes(app)
module.exports = app
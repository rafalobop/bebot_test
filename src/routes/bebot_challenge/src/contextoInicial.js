const express = require('express')
const uuid = require('uuid')
const app = express.Router()

const creador = {
    name: "Rafael",
    lastName: "Lobo Plaza"
}
const bot = {
    robotName: "Robotin",
    id: uuid.v4()
}

const handler = (req,res)=>{
    return res.json({
        author: `${creador.name} ${creador.lastName}`,
        nombre_bot: bot.robotName,
        id: bot.id
    })
}

app.post('/', handler)

module.exports = {app, handler}
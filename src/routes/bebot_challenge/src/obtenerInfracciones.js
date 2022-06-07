const express = require('express')
const app = express.Router()

const handler = (req,res)=>{
    const {userDni} = req.params
    if(isNaN(userDni)) return res.json({msg:'No puedes ingresar caracteres no numéricos.'})
    
    if(userDni.length < 8 || userDni.length > 8){
        return res.json({
            msg:'El formato del dni es inválido',
            description:'El dni debe tener entre 7 y 8 caracteres.',
            code: 1,
            error: true
        })
    }else{
        return res.status(200).json({
            msg: 'Buenisimo, no tienes infracciones',
            code: 2
        })
    }
}

app.post('/:userDni', handler)

module.exports = {app, handler}
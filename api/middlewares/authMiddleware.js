const { header } = require("express-validator")

const jwt = require('jsonwebtoken')
const { secret } = require('../config')

module.exports = function (req,res,next){
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decodeToken = jwt.verify(token,secret)
        req.user = decodeToken
        next()
    }
    catch(e){
        res.json('Пользователь не авторизован')
    }
}
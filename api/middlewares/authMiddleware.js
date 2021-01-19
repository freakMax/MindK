const { header } = require("express-validator")

const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function (req,res,next){
    try{
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(400).send('Пользователь не авторизован!');
        }
        const decodedData = jwt.verify(token, config.getValue('secret'));
        req.user = decodedData.id
        next()
        }
    catch(e){
        res.json('Пользователь не авторизован')
    }
}
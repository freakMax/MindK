const db = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const {secret} = require('../config')

const generateToken = (id) =>{
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn:'24h'})
}

class authController{
    async registration(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message:'Ошибка регистрации',errors})
        }
        const {login,password} = req.body
        const candidate = await db.query('SELECT * FROM users WHERE login = $1',[login])
        if(candidate.rowCount){
            return res.status(400).json('Пользыватель с таким именем уже существует')
        }else{
            const hashPassword = bcrypt.hashSync(password, 5)
            const newUser = await db.query('INSERT INTO users (login,password) VALUES ($1,$2)',[login,hashPassword])
            res.json({message:'Пользователь успешно зарегистрирован'})
        }
    }
    async login(req,res){
        const {login,password} = req.body
        const user = await db.query('SELECT * FROM users WHERE login = $1',[login])
        if(!user.rowCount){
            return res.status(400).json(`Пользователь ${login} не найден`)
        }
        const validPassword = bcrypt.compareSync(password,user.rows[0].password)
        if(!validPassword){
            return res.status(400).json('Неверный пароль')
        }
        const token = generateToken(user.rows[0].id)
        res.json({token:token})
    }
    async getUsers(req,res){
        const users = await db.query('SELECT * FROM users')
        res.json(users)
    }
}

module.exports = new authController
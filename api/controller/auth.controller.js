const db = require('../services/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const config = require('../config')
const mailer = require('../services/nodemailer')
const {OAuth2Client} = require('google-auth-library')
const fetch = require('node-fetch')

const client = new OAuth2Client('356441273372-3mdoiujfbekjbsm2ouocue1bhuia0euh.apps.googleusercontent.com')

const generateToken = (...info) => {
    const payload = { ...info }
    return jwt.sign(payload, config.getValue('secret'), {expiresIn: '24h'})
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
            return res.status(400).json('Пользователь с таким именем уже существует')
        }else{
            const hashPassword = bcrypt.hashSync(password, 5)
            await db.query('INSERT INTO users (login,password,isAccepted) VALUES ($1,$2,false)',[login,hashPassword])
            const link = `https://localhost:3000/auth/checkAccept/${login}`
            const message = {
                to: login,
                subject: 'Вы успешно зарегистрировались в Youngsters',
                html: `
                <h1>Для подтверждения email нажмите на ссылку -></h1>
                <a href="${link}">Подтверждение e-mail</a>
                `
            }
            mailer(message)
            res.json({message:'Пользователь успешно зарегистрирован,проверьте Вашу почту и подтвердите регистрацию'})
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
    async checkAccept(req,res){
        try{
            const login = req.params[0]
            const candidate = await db.query('SELECT * FROM users WHERE login = $1',[login])
            if(!candidate.rowCount){
                return res.status(400).json('Такого пользователя не существует!')
            }else{
            if(!candidate.isAccepted){
                return res.status(400).json('Вы уже подтвердили e-mail!')
            }
            await db.query(`UPDATE users set isAccepted = true where login = $1 RETURNING *`, [login])
            res.json('Вы успешно подтвердили почту!')
            }
        }
        catch(e){
            res.json(e)
        }
    }
    async GoogleLogin(req,res){
            const { tokenId } = req.body
            client.verifyIdToken({idToken:tokenId,audience:'356441273372-3mdoiujfbekjbsm2ouocue1bhuia0euh.apps.googleusercontent.com'})
            .then(async response => {
                const{email_verified,email} = response.payload
                if(email_verified){
                    const user = await db.query('SELECT * FROM users WHERE login = $1',[email])
                    if(user.rowCount){
                        const token = generateToken(user.rows[0].id)
                        res.send(`Old user ${token}`)
                    }else{
                        const hashPassword = bcrypt.hashSync(tokenId,5)
                        await db.query(
                            `INSERT INTO users (login, password, isAccepted, role) values ($1, $2, true, 'user') RETURNING *`,
                            [email, hashPassword])
                        const newUser = await db.query('SELECT * FROM users WHERE login = $1',[email])
                        const token = generateToken(newUser.rows[0].id)
                        res.send(`New user ${token}`)
                    }
                }
            })
    }
    async FacebookLogin(req,res){
        const { accessToken, userID } = req.body
        let urlGraphFB = `https://graph.facebook.com/v2.11/${userID}/?fields=id,email&access_token=${accessToken}`
        fetch(urlGraphFB, {
            method: 'GET',
        }).then(res => res.json())
        .then(async response => {
            const {email} = response
            const user = await db.query('SELECT * FROM users WHERE login = $1',[email])
            if(user.rowCount){
                const token = generateToken(user.rows[0].id)
                res.send(`Old user ${token}`)
            }else{
                const hashPassword = bcrypt.hashSync(tokenId,5)
                await db.query(
                    `INSERT INTO users (login, password, isAccepted, role) values ($1, $2, true, 'user') RETURNING *`,
                    [email, hashPassword])
                const newUser = await db.query('SELECT * FROM users WHERE login = $1',[email])
                const token = generateToken(newUser.rows[0].id)
                res.send(`New user ${token}`)
            }
        })
    }
}

module.exports = new authController
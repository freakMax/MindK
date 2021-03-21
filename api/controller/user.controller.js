const db = require('../services/db')
const fs = require('fs')

class userController {
    async getAllUsers(req, res) {
    const users = await db.query(`SELECT * FROM users`)
    res.json(users.rows)
    }

    async getUserById(req, res) {
    const id = req.params.id
    const user = await db.query(`SELECT * FROM users where id = $1`, [id])
    res.json(user.rows)
    }

    async getUserImage(req, res) {
    const id = req.params.id
    const avatar = await db.query(`SELECT image FROM users where id = $1`, [
        id,
    ])
    res.json(avatar.rows[0].image)
    }

    async postUserImage(req, res) {
        const id = req.params.id
        const token = req.body.image.toString().split(',')
        const resolution = token[0].split(';')[0].split('/')
        const raw = new Buffer(token[1], 'base64')
        const name = `image-${Date.now()}.${resolution[1]}`

        fs.writeFile(
            `C:\\Users\\Max\\Desktop\\MindK\\Youngsters\\front\\public\\uploads\\${name}`,raw,function (err) {
            if(err) console.log(err)
            console.log('End')
            }
        )
        const user = await db.query(
        `UPDATE users set image = $1 where id = $2 RETURNING *`,[name, id]
        )
    }

    async updateUser(req, res) {
        const { name, surname } = req.body
        const user = await db.query(
        `UPDATE users set name = $1, surname = $2 where id = $4 RETURNING *`,
        [name, surname, req.params.id]
        )
}   
}

module.exports = new userController()
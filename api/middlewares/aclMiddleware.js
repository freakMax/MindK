const db = require('../services/db')



module.exports = function(table,column){
    return async function (req,res,next){
        const userId = req.user
        const postId = req.params.id
        const posts = await db.query(`SELECT ${column} FROM ${table} WHERE id = $1`,[postId])
        const role = await db.query('SELECT * FROM users WHERE id = $1',[userId])
        console.log(posts.rows)
        console.log(role.rows)
        if(role.rows[0].role == 'admin'){
            res.send('Администратор')
            next()
        }else{
            if(posts.rowCount && posts.rows[0].user_id == userId){
                res.send('Удаленно')
                next()
            }else{
                res.send('Ты не создавал этот пост!')
            }
        }
        }
    }


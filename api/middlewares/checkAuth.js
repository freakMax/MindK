const db = require('../services/db')



module.exports = function(table,column){
    return async function (req,res,next){
        const user = req.user
        const id = req.params.id
        const info = await db.query(`SELECT ${column} FROM ${table} WHERE id = $1`,[id])
        if(user == info.rows[0][column]){
            res.json('Successful')
            next()
        }else{
            return res.status(401).json('У вас нету прав на редактирование поста!')
        }
    }
}

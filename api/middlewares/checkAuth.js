const db = require('../services/db')

module.exports = async function (req,res,next){
    const user = req.user
    const post = req.params.id
    const id = await db.query('SELECT user_id FROM posts WHERE id = $1',[post])
    if(user == id.rows[0].user_id){
        res.json('GGWP horosho sigrano')
        next()
    }else{
        return res.status(401).json('У вас нету прав на редактирование поста!')
    }
}
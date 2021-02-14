const db = require('../services/db')
const permissions = require('../services/permissions')

module.exports = function (limits){
    return async function(req,res,next){
        let isHavePermission = false
        const userId = req.user
        const postId = req.params.id
        const role = await db.query('SELECT role FROM users WHERE id = $1',[userId])
        const currentPermissions = permissions[role.rows[0].role]
        limits.forEach(async(limit) => {
            if(limit.userPost){
                const post = await db.query(`SELECT ${limit.userPost.column} FROM ${limit.userPost.table} WHERE id = $1`,[postId])
                if(post.rows[0].user_id == userId){
                    console.log('owner')
                    isHavePermission = true
                    if(isHavePermission){
                        next()
                    }else{
                        console.log('not your')
                    }
                }else{
                    if(currentPermissions.includes(limit.permission)){
                        console.log('adm')
                        isHavePermission = true
                        if(isHavePermission){
                            next()
                        }else{
                            console.log('not your')
                        }
                    }
                }
            }
        });
    }
}


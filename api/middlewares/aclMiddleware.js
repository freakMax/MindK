const db = require('../services/db')
const permissions = require('../services/permissions')

module.exports = function (limits){
    return async function(req,res,next){
        let isHavePermission = false
        const userId = req.user
        const postId = req.params.id
        const role = await db.query('SELECT role FROM users WHERE id = $1',[userId])
        const currentPermissions = permissions[role.rows[0].role]

        for await(const limit of limits){
            if(limit.ownerInfo){
                const post = await db.query(`SELECT ${limit.ownerInfo.column} FROM ${limit.ownerInfo.table} WHERE id = $1`,[postId])
                if(post.rows[0].user_id == userId){
                    isHavePermission = true
                    break;
                }else{
                    if(currentPermissions.includes(limit.permission)){
                        console.log('adm')
                        isHavePermission = true
                        break;
                    }
                }
            }
        }
        if(isHavePermission){
            next()
        }
        else{
            res.status(401).json('not your')
        }
    }
}

const db = require('../services/db')

module.exports = function(fields){
    return async function (req,res,next){
        const message = []
        for ([field,rules] of Object.entries(fields)) {
            for (const rule of rule) {
                const [property,...params] = rule.split(':')
                switch(property){
                    case 'required':
                        !req.body[field]?message.push(`Field ${field} is required`):null
                        break
                    case 'min':
                        const min = +params[0]
                        req.body[field].length < min ?message.push( `${field} is too short, min length: ${min}`):null
                        break
                    case 'max':
                        const max = +params[0]
                        req.body[field].length > max ?message.push( `${field} is too long, max length: ${max}`):null
                        break
                    case 'email':
                        (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).test(req.body[field]) ? null : 
                        message.push(`${field} incorrect email`)
                        break
                    case 'oneOf':
                        if (!params.includes(req.body[field])) {
                            message.push(`${field} must includes one of this rows : ${params.join(',')}`)
                        }
                        break
                    case 'unique':
                        if(req.body[field]){
                            const fieldData = await db.query('SELECT * from $1 WHERE $2 = $3',[params[0],params[1],req.body[field]])
                            if(fieldData.rowCount){
                                if (!(req.params.id === fieldData.rows[0].id && params[3])){
                                    message.push(`${field} is not unique`)
                                }
                            }
                        }
                        break
            }
        }
    }
    }
    if(!message.length){
        next()
    }
    return res.status(422).json(message)
}
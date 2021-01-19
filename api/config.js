require('dotenv').config()

class config{
    getValue(path,defaultValue=''){
        return process.env[path] || defaultValue
    }
} 

module.exports = new config()
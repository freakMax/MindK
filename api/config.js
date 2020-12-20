require('dotenv').config()

class Config {
    getPort(port,defaultValue){
        return process.env[port] || defaultValue
    }
}

module.exports = new Config()
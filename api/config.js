require('dotenv').config()

class Config {
    get PORT() {
        return process.env.PORT || 3000
    }
}

module.exports = new Config()
const config = require('../config')

const Pool = require('pg').Pool;
const pool = new Pool({
    user:config.getValue('user'),
    password:config.getValue('password'),
    host:config.getValue('host'),
    port:config.getValue('portdb'),
    database:config.getValue('database')
})

module.exports = pool
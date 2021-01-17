const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'max88283920',
    host:'localhost',
    port:5432,
    database:'youngsters'
})

module.exports = pool
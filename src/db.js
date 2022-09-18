const { Pool} = require("pg")

const pool = new Pool ({
    user: 'postgres',
    password: '2020',
    host: 'localhost',
    port: 5432,
    database: 'comprascasadb'
   
})

    module.exports = pool;
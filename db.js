let database = require('sqlite3').verbose()
let createDB = new database.Database('./database.db', function(err) {
    if (err) {
        throw err
    }
    console.log('create db success');
    
})

module.exports = createDB;
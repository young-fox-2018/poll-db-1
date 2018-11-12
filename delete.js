const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');
const args = process.argv.slice(2);

const query = `DELETE FROM ${args[0]} WHERE ID = ${Number(args[1])}`;

// run query
db.run(query, function(err) {
    if (err) console.log(`Error insert data, `, err);
    else console.log(`Data deleted`);
});
db.close();
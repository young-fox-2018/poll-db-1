const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');
const args = process.argv.slice(2);
const fs = require('fs');

const database = args[0];
const id = JSON.parse(args[1]);
const data = args.slice(2);

// get column name
let header = '';
switch(args[0]) {
    case 'politicians': header = fs.readFileSync('./politicians.csv'); break;
    case 'voters': header = fs.readFileSync('./voters.csv'); break;
    case 'votes': header = fs.readFileSync('./votes.csv'); break;
    default: console.log(`wrong database`); break;
}
header = header.toString().split('\n');
header = header[0].split(',');

// make string query
let query = `UPDATE ${database} SET `;
for (let i = 0; i < header.length; i++) {
    if (i < header.length - 1) {
        query += `${header[i]} = '${data[i]}', `;
    }
    if (i === header.length - 1) {
        query += `${header[i]} = '${data[i]}'`;
    }
}
query += ` WHERE id = ${id}`;

// run query
db.run(query, function(err) {
    if (err) console.log(`Error insert data, `, err);
    else console.log(`Data updated!`);
});
db.close();
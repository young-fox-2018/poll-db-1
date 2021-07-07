const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');
const args = process.argv.slice(2);
const fs = require('fs');

// get column name
let header = '';
switch(args[0]) {
    case 'politicians': header = fs.readFileSync('./politicians.csv'); break;
    case 'voters': header = fs.readFileSync('./voters.csv'); break;
    case 'votes': header = fs.readFileSync('./votes.csv'); break;
    default: console.log(`wrong database`); break;
}
header = header.toString().split('\n');
header = header[0].split(',').join(', ')

// get values
let data = args.slice(1);
for (let i = 0; i < data.length; i++) {
    data[i] = `'${data[i]}'`;    
}

// run query
let query = `INSERT INTO ${args[0]} (${header}) VALUES (${data.join(',')})`;

db.run(query, function(err) {
    if (err) console.log(`Error insert data, `, err);
    else console.log(`Data added!`);
});
db.close();
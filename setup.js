const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

let qPoliticians = `
CREATE TABLE politicians
(id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR,
party VARCHAR(1),
location VARCHAR(2),
grade_current INTEGER);`

let qVoters = `
CREATE TABLE voters
(id INTEGER PRIMARY KEY AUTOINCREMENT,
first_name VARCHAR,
last_name VARCHAR,
gender VARCHAR,
age INTEGER);`

let qVotes = `
CREATE TABLE votes
(id INTEGER PRIMARY KEY AUTOINCREMENT,
voterId INTEGER,
politicianId INTEGER);`

db.serialize(function() {
    db.run(qPoliticians, function(err) {
        if (err) {
            console.log({message: 'table err politicians'});
        }
    });
    db.run(qVoters, function(err) {
        if (err) {
            console.log({message: 'table err voters'});
        }
    });
    db.run(qVotes, function(err) {
        if (err) {
            console.log({message: 'table err votes'});
        }
    });
})
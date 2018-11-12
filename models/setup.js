const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/database/poll.db');

db.serialize(function() {
  db.run(`CREATE TABLE IF NOT EXISTS politicians (
    id INTEGER PRIMARY KEY AUTOINCREMENT ,
    name TEXT,
    party TEXT,
    location TEXT ,
    grade_current REAL
    )`)
    db.run(`CREATE TABLE IF NOT EXISTS voters (
      id INTEGER PRIMARY KEY AUTOINCREMENT ,
      first_name TEXT,
      last_name TEXT,
      gender TEXT ,
      age INTEGER
      )`)
    db.run(`CREATE TABLE IF NOT EXISTS votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT ,
      voters_id INTEGER,
      politicians_id INTEGER,
      FOREIGN KEY (politicians_id) REFERENCES politicians(id),
      FOREIGN KEY (voters_id) REFERENCES voters(id)
        )`)
});

db.close();

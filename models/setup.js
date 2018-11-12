const sqlite3 = require("sqlite3").verbose()
let db = new sqlite3.Database("../pollDb.db")

let politicians = (`CREATE TABLE IF NOT EXISTS politicians (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    party VARCHAR(255),
    location VARCHAR,
    grade_current INTEGER)
    `)
let voters = (`CREATE TABLE IF NOT EXISTS voters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR (255),
    gender VARCHAR(255),
    age INTEGER
)`)
let votes = (`CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    voterId INTEGER,
    politicianId INTEGER,
        FOREIGN KEY (voterId) REFERENCES voters (id),
        FOREIGN KEY (politicianId) REFERENCES politicians (id)
)`)

db.serialize(() => {
    db.run(politicians, err => {
        if (err) throw err
        else console.log('Table politicians successfully created')
    })
    db.run(voters, err => {
        if (err) throw err
        else console.log('Table voters successfully created')
    })
    db.run(votes, err => {
        if (err) throw err
        else console.log('Table votes successfully created')
    })
})

db.close()

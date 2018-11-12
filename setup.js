//your code here
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./data.db')

db.serialize(function() {
    let createVoterTable = ` 
    CREATE TABLE IF NOT EXISTS voters (
        voterId INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName VARCHAR(50),
        lastName VARCHAR(50),
        gender VARCHAR(1),
        age INTEGER
    )`

    db.run(createVoterTable, function(err) {
        if(err) {
            console.log('err: ', err);
        } else {
            console.log('Voter Table success!')
        }
    })

    let createPoliticianTable = `
    CREATE TABLE IF NOT EXISTS politicians (
        politicianId INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50),
        party VARCHAR(50),
        location VARCHAR(20),
        grade INTEGER
    )`

    db.run(createPoliticianTable, function(err) {
        if(err) {
            console.log('err: ', err)
        } else {
            console.log('Politician Table success!')
        }
    })

    let createTotalVoteTable = `
    CREATE TABLE IF NOT EXISTS votes (
        voteId INTEGER PRIMARY KEY AUTOINCREMENT,
        voterId INTEGER,
        politicianId INTEGER,
        FOREIGN KEY (voterId) REFERENCES voters(voterId),
        FOREIGN KEY (politicianId) REFERENCES politicians(politicianId)
    )`

    db.run(createTotalVoteTable, function(err) {
        if(err) {
            console.log('err: ', err)
        } else {
            console.log('List Vote Table success!')
        }
    })
})

module.exports = db

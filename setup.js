//your code here
const db = require('./db')

db.serialize(function(){

    let politicians = 
    `
    CREATE TABLE IF NOT EXISTS politicians
        (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR,
        party VARCHAR,
        location VARCHAR,
        grade_current FLOAT
        );
    `
    db.run(politicians, function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log('Politicians table sukses')
        }
    })

    let voters = 
    `
    CREATE TABLE IF NOT EXISTS voters
        (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name VARCHAR,
        last_name VARCHAR,
        gender VARCHAR,
        age INTEGER
        );
    `
    db.run(voters, function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log('Voters table sukses')
        }
    })

    let votes = 
    `
    CREATE TABLE IF NOT EXISTS votes
        (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        voters_id INTEGER,
        politicians_id INTEGER,
            FOREIGN KEY (voters_id) REFERENCES voters(id),
            FOREIGN KEY (politicians_id) REFERENCES politicians(id)
        );
    `
    db.run(votes, function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log('Votes table sukses')
        }
    })

})

//your code here
const db    = require('./voterdb.js');

db.run(`DROP TABLE IF EXISTS voters`)
db.run(`DROP TABLE IF EXISTS votes`)
db.run(`DROP TABLE IF EXISTS politicians`)


db.serialize(function(){
    const voters = `CREATE TABLE IF NOT EXISTS voters (
        voterId INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name varchar(100),
        last_name varchar(100),
        gender varchar(6),
        age int
        );`
    
    db.run(voters,function(err){
        if (err){
            console.log("ERR create: ", err)
        }
        else{
            console.log("voters table has been created")
        }
    })
    
    const politicans = `CREATE TABLE IF NOT EXISTS politicians (
        politicianId INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100),
        party VARCHAR(1),
        location VARCHAR(200),
        grade_current REAL
        );`
    
    db.run(politicans,function(err){
        if(err){
            console.log("ERR politicians: ", err)
        }
        else{
            console.log("politicians table has been created")
        }
    })
    
    const votes = `CREATE TABLE IF NOT EXISTS votes (
        votesId INTEGER PRIMARY KEY AUTOINCREMENT,
        voterId INTEGER,
        politicianId INTEGER
        );`
    
    db.run(votes,function(err){
        if (err){
            console.log("ERR votes: ", err)
        }
        else{
            console.log("votes table has been created")
        }
    })    
})

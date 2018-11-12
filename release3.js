const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./voterDatabase.db")

const query1 = `SELECT name, party, grade_current
                FROM  politicians
                WHERE party = "R" AND grade_current BETWEEN 9 AND 11
                ORDER BY grade_current ASC;`
db.all(query1,function(err,data){
    if(err){
        console.log("ERR Query1: ", err)
    }
    else{
        console.log(data)
    }
})

const query2 = 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/database/poll.db');
const fs          = require('fs')
var politicians   = fs.readFileSync('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/models/politicians.csv','utf8').split('\n')
var voters        = fs.readFileSync('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/models/voters.csv','utf8').split('\n')
var votes         = fs.readFileSync('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/models/votes.csv','utf8').split('\n')

// console.log(politicians)
// console.log(politicians[0].split(','))

db.serialize(function(){
  for(let i = 1; i < politicians.length-1; i++){
    let dataPoll = politicians[i].split(',')
    db.run(`INSERT INTO politicians (
            name,
            party,
            location,
            grade_current
          )
          VALUES (
            "${dataPoll[0]}",
            "${dataPoll[1]}",
            "${dataPoll[2]}",
             ${dataPoll[3]}
          )`
        )
  }
  for(let i = 1; i < voters.length-1; i++){
    let dataPoll = voters[i].split(',')
    console.log(dataPoll[3])
    db.run(`INSERT INTO voters (
            first_name,
            last_name,
            gender,
            age

          )
          VALUES (
            "${dataPoll[0]}",
            "${dataPoll[1]}",
            "${dataPoll[2]}",
            ${Number(dataPoll[3])}
          )`
        )
  }
  for(let i = 1; i < votes.length-1; i++){
    let dataPoll = votes[i].split(',')
    db.run(`INSERT INTO votes (
            voters_id,
            politicians_id
          )
          VALUES (
            ${dataPoll[0]},
            ${dataPoll[1]}
          )`
        )
}

}
)

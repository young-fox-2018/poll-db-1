const db = require('./db')
const fs = require('fs')

db.serialize(function() {

    let filePolitician = fs.readFileSync('./politicians.csv', 'utf8').split('\n')
    for(let i = 1; i < filePolitician.length-1; i++) {
        let split = filePolitician[i].split(',')

        let politicians = 
        `
        INSERT INTO politicians
            (name, party, location, grade_current)
        VALUES
            ('${split[0]}', '${split[1]}', '${split[2]}', '${split[3]}')
        `   
        db.run(politicians, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('Insert politicians done')
            }
        })
    }
    
    let fileVoters = fs.readFileSync('./voters.csv', 'utf8').split('\n')
    for(let i = 1; i < fileVoters.length-1; i++) {
        let split = fileVoters[i].split(',')

        let voters = 
        `
        INSERT INTO voters
            (first_name, last_name, gender, age)
        VALUES
            ("${split[0]}", "${split[1]}", "${split[2]}", "${split[3]}")
        `   
        db.run(voters, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('Insert voters done')
            }
        })
    }
    
    let fileVote = fs.readFileSync('./votes.csv', 'utf8').split('\n')
    for(let i = 1; i < fileVote.length-1; i++) {
        let split = fileVote[i].split(',')

        let votes = 
        `
        INSERT INTO votes
            (voters_id, politicians_id)
        VALUES
            ("${split[0]}", "${split[1]}")
        `   
        db.run(votes, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('Insert votes done')
            }
        })
    } 

})
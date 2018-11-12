const db = require('./setup.js')
const fs = require('fs')

//SEED DATA Politicians
const politiciansCSV = fs.readFileSync('./politicians.csv', 'utf8').split('\n')
let politiciansData = []
for(let i = 1; i < politiciansCSV.length-1; i++) {
    politiciansData.push(politiciansCSV[i].split(','))

}
for(let i = 0; i < politiciansData.length; i++) {
    let addData = `INSERT INTO politicians (name, party, location, grade)
    VALUES('${politiciansData[i][0]}', '${politiciansData[i][1]}', '${politiciansData[i][2]}', '${politiciansData[i][3]}')`
    db.run(addData, function(err) {
        if(err) throw err
        console.log('Add data Politicians Success');
        
    })
}

//SEED DATA VOTERS
const votersCSV = fs.readFileSync('./voters.csv', 'utf8').split('\n')
let votersData = []
for(let i = 1; i < votersCSV.length-1; i++) {
    votersData.push(votersCSV[i].split(','))
}

for(let i = 0; i < votersData.length; i++) {
    let addData = `INSERT INTO voters (firstName, lastName, gender, age) 
    VALUES('${votersData[i][0]}', "${votersData[i][1]}", '${votersData[i][2]}', '${votersData[i][3]}' )`
    db.run(addData, function(err) {
        if(err) throw err
        console.log('Add data Voters Success')
    })
}

//SEED DATA Votes
const votesCSV = fs.readFileSync('./votes.csv', 'utf8').split('\n')
let votesData = []
for(let i = 1; i < votesCSV.length-1; i++) {
    votesData.push(votesCSV[i].split(','))
}

for(let i = 0; i < votesData.length; i++) {
    let addData = `INSERT INTO votes (voterId, politicianId)
    VALUES(${votesData[i][0]}, ${votesData[i][1]})`
    db.run(addData, function(err) {
        if(err) throw err
        console.log('Add data List Vote Success')
    })
}


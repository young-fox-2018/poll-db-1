const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
const fs = require('fs');

db.serialize(function() {
    let politiciansData = fs.readFileSync('./politicians.csv', 'utf8').split('\n');
    for (let i = 1; i < politiciansData.length - 1; i++) {
        let data = politiciansData[i].split(',');
        let qInsertData =  `
        INSERT INTO politicians (name, party, location, grade_current)
        VALUES ("${data[0]}", "${data[1]}", "${data[2]}", "${data[3]}");`;
        db.run(qInsertData, function (err) {
            if (err) {
                console.log({message: 'insert voters err'});
            };
        })
    }

    let votersData = fs.readFileSync('./voters.csv', 'utf8').split('\n');
    for (let i = 1; i < votersData.length - 1; i++) {
        let data = votersData[i].split(',');
        let qInsertData = `
        INSERT INTO voters (first_name, last_name, gender, age)
        VALUES ("${data[0]}", "${data[1]}", "${data[2]}", "${data[3]}");`;
        db.run(qInsertData, function (err) {
            if (err) {
                console.log({message: 'insert voeters err'});
            };
        })   
    }

    let votesData = fs.readFileSync('./votes.csv', 'utf8').split('\n');
    for (let i = 1; i < votesData.length - 1; i++) {
        let data = votesData[i].split(',');
        let qInsertData = `
        INSERT INTO votes (voterId, politicianId)
        VALUES ("${data[0]}", "${data[1]}");`;
        db.run(qInsertData, function (err) {
            if (err) {
                console.log({message: 'insert voetes err'});
            };
        })   
    }
})
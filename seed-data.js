let fs = require('fs')
let db = require('./db')

function addPolitician() {
    let politiciansCSV = fs.readFileSync('./politicians.csv', 'utf8')
    let arr = politiciansCSV.split('\n')
    let arrCSV = []
    let insert = undefined

    //SPLIT STRING
    for (let i = 0; i < arr.length; i++) {
        arrCSV.push(arr[i].split(','))
    }

    console.log(arrCSV);

    //INSERT TO TABLE
    for (let i = 1; i < arrCSV.length; i++) {
        insert = `INSERT INTO Candidate (
            nama_pejabat,
            nama_partai,
            location,
            grade_current
        ) VALUES (
            '${arrCSV[i][0]}',
            '${arrCSV[i][1]}',
            '${arrCSV[i][2]}',
            '${arrCSV[i][3]}'
        );}`
        db.serialize(function () {

            db.run(insert, function (err) {
                if (err) {
                    throw err
                }
                console.log(`INSERT CANDIDATE SUCCESS`);
            })
        })
        
    }
}

function addVoters() {
    let votersCSV = fs.readFileSync('./voters.csv', 'utf8')
    let arr = votersCSV.split('\n')
    let arrCSV = []
    let insert = undefined

    //SPLIT STRING
    for (let i = 1; i < arr.length; i++) {
        arrCSV.push(arr[i].split(','))
    }

    for (let i = 0; i < arrCSV.length; i++) {
        insert = `INSERT INTO Voters (
            first_name,
            last_name,
            gender,
            age
        ) VALUES (
            "${arrCSV[i][0]}",
            "${arrCSV[i][1]}",
            "${arrCSV[i][2]}",
            "${arrCSV[i][3]}"
        );`

        db.serialize(function () {


            db.run(insert, function (err) {
                if (err) {
                    throw err
                }
                console.log(`INSERT VOTERS SUCCESS`);
            })
        })
    }
}

function addVotes() {
    let votesCSV = fs.readFileSync('./votes.csv', 'utf8')
    let arr = votesCSV.split('\n')
    let arrCSV = []
    let insert = undefined

    //SPLIT STRING
    for (let i = 1; i < arr.length; i++) {
        arrCSV.push(arr[i].split(','))
    }
    console.log(arrCSV);


    for (let i = 0; i < arrCSV.length; i++) {
        insert = `INSERT INTO Voting (
            id_pejabat,
            id_voters
        ) VALUES (
            "${Number(arrCSV[i][1])}",
            "${Number(arrCSV[i][0])}"
        );`
        console.log(insert)
        db.serialize(function() {
            
        
        db.run(insert, function (err) {
            if (err) {
                throw err
            }
            console.log('INSERT VOTES SUCCESS')
        })
    })
    }
}



addPolitician()
addVoters()
addVotes()


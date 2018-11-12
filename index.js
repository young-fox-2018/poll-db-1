const PoliticianController = require('./Controllers/politicianController')
const VoterController = require('./Controllers/voterController')
const VotesController = require('./Controllers/votesController')
const argv = process.argv
const db = require('./Database/db')

switch (argv[2]) {
    case 'seed':
        switch (argv[3]) {
            case 'politicians':
                PoliticianController.seedData()
                break;
            case 'voters':
                VoterController.seedData()
                break;
            case 'votes':
                VotesController.seedData()

        }
    case 'add':
        switch (argv[3]) {
            case 'politicians':
                PoliticianController.newPolitician(`${argv[4]} ${argv[5]}`, argv[6], argv[7], argv[8])
                break;
            case 'voters':
                VoterController.newVoter(argv[4], argv[5], argv[6], argv[7])
                break;
        }
    case 'update':
        switch (argv[3]) {
            case 'voters':
                VoterController.updateVoter(argv[4], argv[5], argv[6], argv[7], argv[8])
                break;
            case 'politicians':
                PoliticianController.updatePolitician(argv[4], `${argv[5]} ${argv[6]}`, argv[7], argv[8], argv[9])
                break;
        }

    case 'delete':
        switch (argv[3]) {
            case 'voters':
                VoterController.deleteVoter(argv[4])
                break;
            case 'politicians':
                PoliticianController.deletePolitician(argv[4])
                break;
        }
        break;
    case 'soal1':
        db.all(`SELECT name, party, gradeCurrent
            FROM Politicians
            WHERE party = 'R' AND gradeCurrent BETWEEN 9 AND 11`, function (err, data) {
                if (err) {
                    throw err
                } else {
                    console.log(data)
                }
            })
        break;

    case 'soal2':
        db.all(`SELECT name, count(*) AS totalVote 
                FROM Votes a 
                INNER JOIN politicians b 
                ON a.politicianId= b.id
                WHERE b.name = 'Olympia Snowe'`, function (err, data) {
                if (err) {
                    throw err
                } else {
                    console.log(data)
                }
            })
        break;

    case 'soal3':
        db.all(`SELECT name, count(*) AS totalVote 
                FROM Votes a 
                INNER JOIN politicians b 
                ON a.politicianId= b.id
                WHERE b.name LIKE '%Adam %'
                GROUP BY b.name`, function (err, data) {
                if (err) {
                    throw err
                } else {
                    console.log(data)
                }
            })
        break;

    case 'soal4':
        db.all(`SELECT COUNT(*) AS totalVote, name,  party, location
                FROM Politicians a
                INNER JOIN Votes b
                ON a.id = b.politicianId
                GROUP BY a.name
                ORDER BY totalVote DESC
                LIMIT 3`, function (err, data) {
                if (err) {
                    throw err
                } else {
                    console.log(data)
                }
            })
        break;

    case 'soal5':
        db.all(`SELECT firstName, lastName, location, age FROM Voters a
                INNER JOIN Votes b
                ON a.id = b.voterId
                INNER JOIN Politicians c
                ON c.id = b.politicianId
                WHERE c.name = 'Olympia Snowe'`, function (err, data) {
                if (err) {
                    throw err
                } else {
                    console.log(data)
                }
            })
        break;

}
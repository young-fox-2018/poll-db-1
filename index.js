const argv = process.argv.slice(2)
const Controller = require('./controllers/controller')

switch (argv[0]) {
    case 'setup':
        Controller.Setup()
        break
    
    case 'seedPoliticians':
        Controller.seedDataPoliticians()
        break

    case 'seedVoters':
        Controller.seedDataVoters()
        break

    case 'seedVotes':
        Controller.seedDataVotes()
        break

    case 'insertPolitician':
        Controller.insertDataPolitician(argv[1], argv[2], argv[3], argv[4]) // name, party, location, grade_current
        break

    case 'insertVoter':
        Controller.insertDataVoter(argv[1], argv[2], argv[3], argv[4]) // first_name, last_name, gender, age
        break

    case 'insertVote':
        Controller.insertDataVote(argv[1], argv[2]) // voter id, politician id
        break

    case 'update':
        Controller.updateData(argv[1], argv[2], argv[3], argv[4]) // id, table, field, new value
        break
    
    case 'delete':
        Controller.deleteTableData(argv[1], argv[2]) // id, table
        break

    case 'showRange':
        Controller.showRange(argv[1], argv[2], argv[3]) // party, min, max
        break
    
    case 'voteCount':
        Controller.voteCount(argv[1]) // politician name
        break

    case 'countContains':
        Controller.countContains(argv[1]) // name keyword
        break

    case 'bestThreePoliticians':
        Controller.bestThreePoliticians()
        break
    
    case 'politicianVoters':
        Controller.politicianVoters(argv[1]) // politician name
        break
}
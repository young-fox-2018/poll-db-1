const input = process.argv.slice(2)
const SetupController = require('./controllers/setupController')
const Release3Controller = require('./controllers/release3Controller')

pathPolitician = './models/politicians.csv'
pathVoter = './models/voters.csv'
pathVote = './models/votes.csv'

switch (input[0]) {
    case 'create':
        if(input[1] === 'table') {
            SetupController.createTable(input[2],input[3])
        }
        break;
    case 'insert':
        if(input[1] === 'seed') {
            if(input[2] === 'politicians') SetupController.insertSeed(pathPolitician,input[2])
            else if (input[2] === 'voters') SetupController.insertSeed(pathVoter,input[2])
            else if (input[2] === 'votes') SetupController.insertSeed(pathVote,input[2])
        }
        break;
    case 'release3':
        if (input[1] === 'nomor1') Release3Controller.nomor1(input[2],Number(input[3]),Number(input[4]))
        else if (input[1] === 'nomor2') Release3Controller.nomor2(input[2])
        else if (input[1] === 'nomor3') Release3Controller.nomor3(input[2])
        else if (input[1] === 'nomor4') Release3Controller.nomor4()
        else if (input[1] === 'nomor5') Release3Controller.nomor5(input[2])
        break;

    default:
        break;
}
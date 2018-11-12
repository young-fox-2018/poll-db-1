const argv = process.argv.slice(2)
const input = argv.slice(2)
const PoliticianController = require('./controllers/PoliticianController')
const VoterController = require('./controllers/VoterController')
const VoteController = require('./controllers/VoteController')

switch (argv[0]) {

    case "politician":
        switch (argv[1]) {
            case "createTable":
                PoliticianController.createTable()
                break;

            case "seeding":
                PoliticianController.seeding()
                break;

            case "add":
                PoliticianController.add(input)
                break;
        
            default:
                PoliticianController.help()
                break;
        }
        break;

    case "voter":
        switch (argv[1]) {
            case "createTable":
                VoterController.createTable()
                break;

            case "seeding":
                VoterController.seeding()
                break;

            case "add":
                VoterController.add(input)
                break;
        
            default:
                PoliticianController.help()
                break;
        }
        break;

    case "vote":
        switch (argv[1]) {
            case "createTable":
                VoteController.createTable()
                break;

            case "seeding":
                VoteController.seeding()
                break;

            case "add":
                VoteController.add(input)
                break;
        
            default:
                PoliticianController.help()
                break;
        }
        break;

    case "q1":
        PoliticianController.q1()
        break;

    case "q2":
        PoliticianController.q2()
        break;

    case "q3":
        PoliticianController.q3()
        break;

    case "q4":
        PoliticianController.q4()
        break;

    case "q5":
        PoliticianController.q5()
        break;

    default:
        PoliticianController.help()
        break;
}
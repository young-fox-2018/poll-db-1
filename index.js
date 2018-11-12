const argv = process.argv.slice(2)
const Controller = require("./controllers/controller")

switch (argv[0]) {
    case "seeder":
        Controller.seeder()
        break;
    case "add":
        switch (argv[1]) {
            case "politician":
                // node index.js add politician sulistyo D HI 12.76643582
                let dataPol = argv.slice(2)
                Controller.add("politician", dataPol)
                break;
            case "voter":
                // node index.js add Voters sulis tyo male 23
                let dataVoter = argv.slice(2)
                Controller.add("voter", dataVoter)
                break;
            case "vote":
                // node index.js add vote 21 1
                let dataVote = argv.slice(2)
                Controller.add("vote", dataVote)
                break;
        }
        break;
    case "update":
        switch (argv[1]) {
            case "politician":
                // node index.js update politician location DELTA 22
                Controller.update("politician", argv[2], argv[3], argv[4], argv[5])
                break;
            case "voter":
                // node index.js update voter age 25 151
                Controller.update("voter", argv[2], argv[3], argv[4], argv[5])
                break;
            case "vote":
                // node index.js update vote voterId 25 164
                Controller.update("vote", argv[2], argv[3], argv[4], argv[5])
                break;
        }
        break;
    case "delete":
        switch (argv[1]) {
            case "politician":
                Controller.delete("politician", argv[2])
                break;
            case "politician":
                Controller.delete("votes", argv[2])
                break;
            case "politician":
                Controller.delete("voters", argv[2])
                break;
        }
        break;

    default:
        break;

}

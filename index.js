const input = process.argv.slice(2)
const Controller = require('./Controllers/Controller')


switch (input[0]) {
    case 'seed':
        Controller.seed()
        break;
    case 'insert':
        if (input[1] !== 'Politicians' && input[1] !== 'Votes' && input[1] !== 'Voters') {
            console.log(`Your database is false!`)
        } else {
            switch (input[1]) {
                case 'Politicians':
                    Controller.insert(input[1], input.slice(2))
                    break;
                case 'Voters':
                    Controller.insert(input[1], input.slice(2))
                    break;
                case 'Votes':
                    Controller.insert(input[1], input.slice(2))
                    break;
            }
        }
        break;
    case 'update':
        if (input[1] !== 'Politicians' && input[1] !== 'Votes' && input[1] !== 'Voters') {
            console.log(`Your database is false!`)
        } else {
            switch (input[1]) {
                case 'Politicians':
                    Controller.update(input[1], input[2], input[3], input.slice(4))
                    break;
                case 'Voters':
                    Controller.update(input[1], input[2], input[3], input.slice(4))
                    break;
                case 'Votes':
                    Controller.update(input[1], input[2], input[3], input.slice(4))
                    break;
            }
        }
        break;

    default:
        break;
}
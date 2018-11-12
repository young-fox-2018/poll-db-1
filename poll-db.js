let PoliticianController = require('./controllers/politicians')
let input = process.argv.slice(2)
console.log(input[0], input[1])
switch (input[0]) {
    case 'politician':
        switch (input[1]) {
            case 'create':
                PoliticianController.create(input.slice(2))
                break;
            default:
                break;
        }
        break;

    default:
        break;
}
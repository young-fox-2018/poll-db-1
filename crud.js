const db = require('./db')
const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')

let tableName = 'voters'
let command = argv[0]
let param = argv.slice(1)

switch (command) {
    case 'insert':
        Controller.insert(param)
        break;
    case 'update':
        Controller.update(param)
        break;
    case 'delete':
        Controller.delete(param)
        break;
    default:
        Controller.help()
        break;
}

const fs = require('fs')

class FileSystem {

    static readFile(path, cb) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) cb(err)
            else {
                data = data.split('\n').slice(1)
                let newArr = []
                data.forEach( item => {
                    newArr.push(item.split(','))
                })
                cb(null, newArr.slice(0, newArr.length-1))
            }
        })
    }

    static writeFile(path, data, cb) {
        fs.writeFile(path, JSON.stringify(data), (err) => {
            if (err) cb(err)
            else cb(null)
        })
    }
}

module.exports = FileSystem
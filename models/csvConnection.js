const fs = require('fs')

class CsvConnection {

    static readData(path,callback){
        fs.readFile(path,"utf8", function(err,data){
            if (err) callback(err,null)
            else {
                data = data.split('\n')
                callback(null,data)
            }
        })
    }

    static writeData(path,input,callback) {
        fs.writeFile(path,JSON.stringify(input,null,2),function(err){
            if(err) callback(err)
            else callback(null)
        })
    }

}

module.exports = CsvConnection
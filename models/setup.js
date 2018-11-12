const db = require('./dbConnection')
const CsvConnection = require('./csvConnection')

class Setup {

    static createTable(tabName,query,callback){
        db.serialize(function(err){
            if (err) callback(err)
            else {
                db.run(`DROP TABLE IF EXISTS ${tabName}`,function(err) {
                    if(err) callback(err)
                })
                db.run(`CREATE TABLE IF NOT EXISTS ${tabName} (${query});`,function(err){
                        if (err) callback(err)
                        else callback(null)
                    })
            }
        })
    }

    static insertSeed(path,tabName,callback) {
        db.serialize(function(err){
            if(err) callback(err,null)
            else {
                CsvConnection.readData(path,function(err,dataCsv){
                    if(err) callback(err,null)
                    else {
                        dataCsv.splice(dataCsv.length-1,1)
                        let values = ''
                        for (let i = 1; i < dataCsv.length; i++) {
                            let convertData = dataCsv[i].split(',')
                            convertData.forEach((datum,index) => {
                                convertData[index] = `"${datum}"`
                            })
                            convertData = convertData.join(',')
                            if (i !== dataCsv.length-1) values += `(${convertData}),`
                            else values += `(${convertData})`
                        }
                        // console.log(`INSERT INTO ${tabName} (${dataCsv[0]}) VALUES ${values};`)
                        db.run(`INSERT INTO ${tabName} (${dataCsv[0]}) VALUES ${values};`,function(err){
                            if(err) callback(err,null)
                        })
                        callback(null,dataCsv)
                    }
                })
            }
        })

    }
}
    module.exports = Setup 
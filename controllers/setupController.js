const Setup = require('../models/setup')
const View = require('../views/view')

class SetupController {

    static createTable(tabName,query) {
        Setup.createTable(tabName,query,function(err){
            if (err) View.errorAlert(err)
            else View.showAlert(`Table ${tabName} was created`)
        })
    }

    static insertSeed(path,tabName) {
        Setup.insertSeed(path,tabName,function(err,data){
            if(err) View.errorAlert(err)
            else View.showAlert(`${data.length-1} successfully insert into ${tabName}`)
        })
    }

}

module.exports = SetupController
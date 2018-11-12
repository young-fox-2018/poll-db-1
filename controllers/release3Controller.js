const Release3 = require('../models/release3')
const View = require('../views/view')

class Release3Controller {

    static nomor1(party,minGrade,maxGrade){
        Release3.nomor1(party,minGrade,maxGrade,function(err,data) {
            if (err) View.errorAlert(err)
            else View.showAlert(data)
        })
    }

    static nomor2(politicianName) {
        Release3.nomor2(politicianName,function(err,data) {
            if (err) View.errorAlert(err)
            else View.showAlert(data)
        })
    }

    static nomor3(condition) {
        Release3.nomor3(condition,function(err,data) {
            if (err) View.errorAlert(err)
            else View.showAlert(data)
        })
    }

    static nomor4() {
        Release3.nomor4(function(err,data) {
            if(err) View.errorAlert(err)
            else View.showAlert(data)
        })
    }

    static nomor5(politicianName) {
        Release3.nomor5(politicianName,function(err,data) {
            if (err) View.errorAlert(err)
            else View.showAlert(data)
        })
    }

}

module.exports = Release3Controller
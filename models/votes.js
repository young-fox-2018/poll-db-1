const   fs          = require ('fs')
var     votes       = fs.readFileSync('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/models/votes.csv','utf8').split('\n')
class Votes{
  constructor(votersId , politId){
    this.votersId       = votersId
    this.politiciansId  = politId
  }

  static create(votersId , politId){
    let obj = new Votes(votersId , politId)


  }
  static read(){

  }
  static update(){
  }
  static delete(){
  }
}


module.exports = Votes

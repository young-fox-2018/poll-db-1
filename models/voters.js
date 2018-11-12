const fs          =require('fs')
var voters        = fs.readFileSync('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/models/voters.csv','utf8').split('\n')

class Voters{
  constructor(fname ,lname ,gender ,age){
    this.first_name = fname
    this.last_name  = lname
    this.gender     = gender
    this.age        = age
  }

  static create(){

  }
  static read(){

  }
  static update(){

  }
  static delete(){

  }
}

console.log(voters)
module.exports = Voters

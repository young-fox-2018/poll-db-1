const fs          = require ('fs')
var politicians   = fs.readFileSync('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-1/poll-db-1/models/politicians.csv','utf8').split('\n')
class Politicians{
  constructor(name, party, location ,grade_current){
    this.name           = name
    this.party          = party
    this.location       = location
    this.grade_current  = grade_current
  }

  static create(name,party,location,grade_current){
    let obj = new Politicians(name ,party,location,grade_current)
    for(let i = 0 ; i<politicians[0].length ; i ++ ){
      let dataPoll = politicians[i].split(',')
      // db.serialize(function(){
      //   db.run(``)
      // })
      console.log(dataPoll)
    }
  }
  static read(){

  }
  static update(){

  }
  static delete(){

  }

}
Politicians.create()
// let a = new Politicians('andromeda','hanura','Gunung Putri ', 13,67 )
module.exports = Politicians

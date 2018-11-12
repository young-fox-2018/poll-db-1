class View {
    static displayError(input) {
        console.log(input)
    }

    static displayData(input) {
        console.log(input)
    }

    static Setup() {
        console.log('Initial table success')
    }
    
    static seedDataPoliticians() {
        console.log('seed data politicians success')
    }

    static seedDataVoters() {
        console.log('seed data voters success')
    }

    static seedDataVotes() {
        console.log('seed data votes success')
    }

    static insertDataPolitician(name, party, location, current_grade) {
        console.log(`New politician added {name: ${name}, party: ${party}, location: ${location}, current_grade: ${current_grade}}`)
    }

    static insertDataVoter(first_name, last_name, gender, age) {
        console.log(`New voter added {name: ${first_name} ${last_name}, gender: ${gender}, age: ${age}}`)
    }

    static insertDataVote(voterId, politicianId) {
        console.log(`New vote added {voterId: ${voterId}, politicianId: ${politicianId}}`)
    }

    static updateData(id, table, field, newValue) {
        console.log(`You updated ${field} as ${newValue} on ID ${id} on table ${table}`)
    }

    static deleteTableData(id, table) {
        console.log(`ID Number ${id} deleted on table ${table}`)
    }
}

module.exports = View
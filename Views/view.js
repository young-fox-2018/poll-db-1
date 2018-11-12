
class View {
    static showSeedDataPolitician() {
        console.log(`Seed data politician success`)
    }
    static showSeedDataVoter() {
        console.log(`Seed data voter success`)
    }
    static showSeedDataVotes() {
        console.log(`Seed data votes success`)
    }
    static showNewPolitician(input) {
        console.log(`Save New Politician with name ${input[input.length - 1].name} Success, Total Politicians: ${input.length}`)
    }
    static showNewVoter(input) {
        console.log(`Save New Voter with name ${input[input.length - 1].firstName} ${input[input.length - 1].lastName} Success, Total Voters: ${input.length}`)
    }
    static showUpdateVoter(input) {
        console.log(`Update data ${input.firstName} ${input.lastName} success!`)
    }
    static showUpdatePolitician(input) {
        console.log(`Update data ${input.name} success!`)
    }
    static showDeletePolitician() {
        console.log(`Data has been successfully deleted`)
    }
    static showDeleteVoter() {
        console.log(`Data has been successfully deleted`)
    }

}

module.exports = View
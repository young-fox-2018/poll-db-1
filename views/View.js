class View {

    static showError(value) {
        console.log(`--------------ERROR OCCURED--------------`)
        console.log(value)
    }

    static showData(value) {
        console.log(value)
    }

    static showList(value) {
        value.forEach(item => {
            console.log(item)
        })
    }

}

module.exports = View
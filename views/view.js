class View {

    static showAlert(input) {
        console.log(input)
    }

    static errorAlert(input) {
        console.log(input)
    }

    static showData(input) {
        input.forEach((datum)=>{
            console.log(datum)
        })
    }

}

module.exports = View
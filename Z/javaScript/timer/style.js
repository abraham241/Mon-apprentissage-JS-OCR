
let Score = 1
let motMax = 3

function returnerMessageScore (){
    let message = "mon score est " + Score + " sur " + motMax
    return message
}

let retourFunction = returnerMessageScore()

console.log(retourFunction)

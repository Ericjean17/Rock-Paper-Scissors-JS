// Computer RPS input
function getComputerChoice() {
    let randomNum = Math.random()
    if (randomNum < 1/3) {
        return "rock"
    }
    else if (randomNum < 2/3) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

// Human RPS input
function getHumanChoice() {
    while (true) {
        let humanInput = prompt("Rock, paper, or scissors?")
        if (humanInput === "Rock" || humanInput === "rock") {
            console.log("rock")
            return "rock"
        }
        else if (humanInput === "Paper" || humanInput === "paper") {
            console.log("paper")
            return "paper"
        }
        else if (humanInput === "Scissors" || humanInput === "scissors") {
            console.log("scissors")
            return "scissors"
        }
        else {
            continue;
        }
    }
}

console.log(getComputerChoice())
console.log(getHumanChoice())


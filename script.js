function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    let computerGuess = "";

    switch(computerNumber) {
        case 1:
            computerGuess = "rock";
            break;
        case 2:
            computerGuess = "paper";
            break;
        case 3:
            computerGuess = "scissors";
            break;
        default:
            break;
    }
    return computerGuess;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        }else if(computerSelection == "scissors") {
            return "You Win! Rock beats Scissors"
        }else {
            return "It's a tie"
        }
    }else if(playerSelection == "paper") {
        if(computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper"
        }else if(computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        }else {
            return "It's a tie"
        }
    }else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            return "You Lose! Rock beats Scissors"
        }else if(computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }else {
            return "It's a tie"
        }
    }else {
        return "Enter any of the three responses (Rock, Paper, Scissors)"
    }
}

const playerSelection = "Rock"
// const playerSelection = prompt("What do you want to play? (Rock or Paper or Scissors)");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
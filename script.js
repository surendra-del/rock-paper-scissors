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

function game() {

    let count = 0;
    for(let i=0; i<5; i++) {
        // const playerSelection = "Rock"
        const playerSelection = prompt("What do you want to play? (Rock or Paper or Scissors)");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        const resultShort = result.slice(4,7)
        if(resultShort == "Win") count += 1;
        else if(resultShort == "Los") count -= 1;
    }
    if(count > 0){
        console.log("You Won the game");
    }else if(count < 0) {
        console.log("You lost the game");
    }else {
        console.log("The game is a tie")
    }
}

game();
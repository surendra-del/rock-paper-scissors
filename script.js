let playerScore = 0;
let compScore = 0;
let playerSelection;
let computerSelection;

const player = document.querySelector("#player-score");
player.textContent = `${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `${compScore}`;

const output = document.querySelector(".info");

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {choice.addEventListener('click', playGame)});

// Creating a button to refresh page
const body = document.querySelector("body");
const playAgain = document.createElement("div");
playAgain.textContent = "Play Again";
playAgain.classList.add("refresh");
playAgain.addEventListener('click', ()=>{
    window.location.reload(true);
});

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
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            compScore++;
            return "You Lose! Paper beats Rock"
        }else if(computerSelection == "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors"
        }else {
            return "It's a tie"
        }
    }else if(playerSelection == "paper") {
        if(computerSelection == "scissors") {
            compScore++;
            return "You Lose! Scissors beats Paper"
        }else if(computerSelection == "rock") {
            playerScore++;
            return "You Win! Paper beats Rock"
        }else {
            return "It's a tie"
        }
    }else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            compScore++;
            return "You Lose! Rock beats Scissors"
        }else if(computerSelection == "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper"
        }else {
            return "It's a tie"
        }
    }
};

function playGame() {
    playerSelection = this.id;
    computerSelection = getComputerChoice();
    output.textContent = playRound(playerSelection, computerSelection);
    player.textContent = `${playerScore}`;
    computer.textContent = `${compScore}`;

    if(playerScore == 5 || compScore == 5) {
        choices.forEach((choice) => {
            choice.classList.add("disabled");
            choice.removeEventListener('click', playGame);
        });
        if(playerScore == 5) {
            output.textContent = "You Won the Game! Congrats";
        }else if(compScore == 5) {
            output.textContent = "You Lost the Game! Oops";
        }
        body.insertBefore(playAgain, output);
    }
};
function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    let computerGuess = "";

    switch(computerNumber) {
        case 1:
            computerGuess = "Rock";
            break;
        case 2:
            computerGuess = "Paper";
            break;
        case 3:
            computerGuess = "Scissors";
            break;
        default:
            break;
    }
    return computerGuess;
}

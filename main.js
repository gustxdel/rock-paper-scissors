
let playerSelection = "Rock";
let computerSelection = getComputerChoice();





// Helper Functions...............//
function getComputerChoice() {
    let randomNumber = random(3);
    let computerChoice;

    if (randomNumber == 1) {
        computerChoice = "Rock";
    }
    else if (randomNumber == 2) {
        computerChoice = "Paper";
    }

    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function random(number){
    return Math.floor(Math.random() * number + 1);
}




let playerSelection = "Rock";
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection) );

// Function to play round...............................//
function playRound(playerSelection, computerSelection) {
    let answer;
    //player chooses "Rock"//
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            answer = "Tie!";    
        }
        else if (computerSelection === "Paper") {
            answer = "You lose! Paper beats Rock";
        }
        else if(computerSelection === "Scissors") {
            answer = "You win! Rock beats Scissors";
        }
    }
    //player chooses "Paper"//
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            answer = "You win! Paper beats Rock";    
        }
        else if (computerSelection === "Paper") {
            answer = "Tie!";
        }
        else if (computerSelection === "Scissors") {
            answer = "You lose! Scissors beats Paper";
        }
    }
    //player choose "Scissors"//
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            answer = "You Lose! Rock beats Scissors";    
        }
        else if (computerSelection === "Paper") {
           answer = "You win! Scissors beats Paper";
        }
        else if (computerSelection === "Scissors") {
            answer = "Tie";
        }
    }

    return answer;
}



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



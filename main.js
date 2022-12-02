let scorePlayer = 0;
let scoreComputer = 0;
const win = "win";
const lose = "lose";
const tie = "tie";

console.log(games());
console.log(scorePlayer +" to " + scoreComputer);

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

//Function to play 5 round game..........................//
function games() {
    let winner;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper Scissors go!");
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
        let computerSelection = getComputerChoice();
        let game = playRound(playerSelection, computerSelection);
        if (game.includes(win) == true) {
            scorePlayer++;  
        } 
        else if (game.includes(lose) == true) {
            scoreComputer++;   
        }
        console.log(game);
    }
    if (scorePlayer > scoreComputer) {
        winner = "You win!";
    }
    else {
        winner = "You lose!";
    }
    return winner;
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



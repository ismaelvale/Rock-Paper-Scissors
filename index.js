let container = document.querySelector('#results');
let playerScore = 0;
let computerScore = 0;


let playerSelection;
function choose(choice){
    playerSelection = choice;
    game();
};

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}; 

function round() {
    let computerSelection = computerPlay();
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
    }  else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
    }  else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
    }  else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
    }  else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
    }
    container.textContent =`You picked ${playerSelection} and the computer picked ${computerSelection}, so you've won ${playerScore} games, and the computer has won ${computerScore} games.`;
};
        
function game() {
    let player = document.querySelector('#playerscore');
    let computer = document.querySelector('#computerscore');
    round();
    player.textContent = `Your score: ${playerScore}`;
    computer.textContent = `Your score: ${computerScore}`;
    if (playerScore >= 5) {
        container.textContent = "You Won!"
        return;
    } else if (computerScore >= 5) {
        container.textContent = "You Lost!";
        return;
     };
    };





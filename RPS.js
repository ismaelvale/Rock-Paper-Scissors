let options = ["rock", "paper", "scissors"];
function computerPlay () {
    return options[Math.floor(Math.random() * options.length)];
}
function round (playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper") {
        return 0;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return 2;
    }  else if (playerSelection == "scissors" && computerSelection == "rock") {
        return 0;
    }  else if (playerSelection == "rock" && computerSelection == "rock") {
        return 1;
    }  else if (playerSelection == "paper" && computerSelection == "paper") {
        return 1;
    }  else if (playerSelection == "scissors" && computerSelection == "paper") {
        return 2;
    }  else if (playerSelection == "rock" && computerSelection == "scissors") {
        return 2;
    }  else if (playerSelection == "paper" && computerSelection == "scissors") {
        return 0;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return 1;
    }
}
console.log(round("Rock", computerPlay()));



function game(playerSelection, computerSelection, n) {
    let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase;
    let computerSelection = computerPlay();
    let score = [];
    for (let i = 0; i < n; i++) {
        result = round(playerSelection, computerSelection);
        score.push(result);
    }
    return score.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
console.log(game(playerSelection, computerSelection, 5));
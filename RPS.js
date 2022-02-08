let options = ["Rock", "Paper", "Scissors"];
function computerPlay () {
    return options[Math.floor(Math.random() * options.length)];
}
function round (playerSelection, computerSelection){
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper Covers Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper Covers Rock";
    }  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock smashes Scissors";
    }  else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "It's a tie!";
    }  else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "It's a tie!";
    }  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors Cut Paper";
    }  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock smashes Scissors";
    }  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors Cut Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "It's a tie!";
    }
}
console.log(round("Rock", "Paper"));
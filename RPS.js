let result = 0;
let score =[];
       function round() {
            let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase;
            let options = ["rock", "paper", "scissors"];
            let computerSelection = function computerPlay() {
                return options[Math.floor(Math.random() * options.length)];
            }; if (playerSelection == "rock" && computerSelection == "paper") {
                result += 0;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                result += 2;
            }  else if (playerSelection == "scissors" && computerSelection == "rock") {
                result += 0;
            }  else if (playerSelection == "rock" && computerSelection == "rock") {
                result += 1;
            }  else if (playerSelection == "paper" && computerSelection == "paper") {
                result += 1;
            }  else if (playerSelection == "scissors" && computerSelection == "paper") {
                result += 2;
            }  else if (playerSelection == "rock" && computerSelection == "scissors") {
                result += 2;
            }  else if (playerSelection == "paper" && computerSelection == "scissors") {
                result += 0;
            } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                result += 1;
            }
        return result;
        };
        
        function game() {
            for (let i = 0; i < 5; i++) {
                round();
                score.push(result);
            }
        return score.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        };


console.log(game());
let result = 0;
let score =[];

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}; 

       function round() {
            //let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();
            let playerSelection = "rock";
            let computerSelection = computerPlay();
            if (playerSelection == "rock" && computerSelection == "paper") {
                result -= 1;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                result += 1;
            }  else if (playerSelection == "scissors" && computerSelection == "rock") {
                result -= 1;
            }  else if (playerSelection == "rock" && computerSelection == "rock") {
                result += 0;
            }  else if (playerSelection == "paper" && computerSelection == "paper") {
                result += 0;
            }  else if (playerSelection == "scissors" && computerSelection == "paper") {
                result += 1;
            }  else if (playerSelection == "rock" && computerSelection == "scissors") {
                result += 1;
            }  else if (playerSelection == "paper" && computerSelection == "scissors") {
                result -= 1;
            } else if (playerSelection == "scissors" && computerSelection == "scissors") {
                result += 0;
            }
            console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}, so you earned ${result} points.` )
        return result;
        };
        
        function game() {
            for (let i = 0; i < 5; i++) {
                round();
                score.push(result);
            }
        let final = score.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        if (final > 0) {
            console.log("You Won!")
        } else {
            console.log("You Lost!");
        };
}

console.log(game());
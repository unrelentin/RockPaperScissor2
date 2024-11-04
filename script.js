let humanScore = 0;
let computerScore = 0;

function getComputerChoice (comChoice) {
    let random = Math.floor(Math.random() * 3)
        if (random == 0) {
            comChoice = "Rock";
        } else if (random == 1) {
            comChoice = "Paper";
        } else {
            comChoice = "Scissor";
        }
    return comChoice.toLowerCase();
};

function getHumanChoice (humanChoice) {
    humanChoice = prompt("Rock, Paper or Scissor?", "no choice");
    return humanChoice.toLowerCase();
};

function playRound (humanChoice, comChoice) {
    if (humanChoice === comChoice) {
        return console.log(`Draw! Computer chose ${comChoice}! The same as you!`)
    } else if ((humanChoice === "rock" && comChoice === "paper") || (humanChoice === "paper" && comChoice === "scissor") || (humanChoice === "scissor" && comChoice === "rock")) {
        computerScore ++
        return console.log(`You lose! ${comChoice} beats ${humanChoice}!`);
    } else if ((humanChoice === "rock" && comChoice === "scissor") || (humanChoice === "paper" && comChoice === "rock") || (humanChoice === "scissor" && comChoice === "paper")) {
        humanScore ++
        return console.log(`You win! ${humanChoice} beats ${comChoice}!`);
    } else {
        return console.log("You gave me no choice.")
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(computerSelection);



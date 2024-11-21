let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

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

const resultDisplay = document.querySelector(".resultDisplay");
const finalResult = document.querySelector(".finalResult");

function playRound (humanChoice, comChoice) {
    comChoice = getComputerChoice(); //why must it get assign here? Because we need a fresh choice each time it's run. Make it local and not relying on global variables
    if (roundCount == 5) {
        scoreCount();
    } else {
        if (humanChoice === comChoice) {
            roundCount ++
            resultDisplay.textContent = `Draw! Computer chose ${comChoice}! The same as you! ${humanScore}:${computerScore}.`
        } else if ((humanChoice === "rock" && comChoice === "paper") || (humanChoice === "paper" && comChoice === "scissor") || (humanChoice === "scissor" && comChoice === "rock")) {
            computerScore ++
            roundCount ++
            resultDisplay.textContent = `You lose! ${comChoice} beats ${humanChoice}!${humanScore}:${computerScore}.`;
        } else if ((humanChoice === "rock" && comChoice === "scissor") || (humanChoice === "paper" && comChoice === "rock") || (humanChoice === "scissor" && comChoice === "paper")) {
            humanScore ++
            roundCount ++
            resultDisplay.textContent = `You win! ${humanChoice} beats ${comChoice}! ${humanScore}:${computerScore}.`;
        } else {
            resultDisplay.textContent = "You gave me no choice.";
        }
    }
};

const rockButton = document.querySelector(".rockButton");
      rockButton.addEventListener("click", () => playRound("rock"));
const paperButton = document.querySelector(".paperButton");
      paperButton.addEventListener("click", () => playRound("paper"));
const scissorButton = document.querySelector(".scissorButton");
      scissorButton.addEventListener("click", () => playRound("scissor"));

function scoreCount() {                       //Remove humanScore and computerScore as parameter in playGame() because it overides the global parameter humanScore and computerScore causing it not get updated properly
    if (humanScore > computerScore) {
        finalResult.textContent = `You are the winner!`;
    } else if (humanScore < computerScore) {
        finalResult.textContent = `You are the loser!`;
    } else {
        finalResult.textContent = `Draw!`;
    }
}

//If I want to end the game when one player reaches 5 points all I need to do is check if one player has reached five points or not and then call scoreCount()






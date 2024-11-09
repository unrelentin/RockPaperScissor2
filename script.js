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

function getHumanChoice () {
    let choice= prompt("Rock, Paper or Scissor?", "no choice");
    return choice.toLowerCase();
};

function playRound (humanChoice, comChoice) {
    humanChoice = getHumanChoice();  // using == cause an error because == is comparison and = is assignment // 
    comChoice = getComputerChoice();
    console.log(`${comChoice}`);
    
    if (humanChoice === comChoice) {
        console.log(`Draw! Computer chose ${comChoice}! The same as you! ${humanScore}:${computerScore}.`)
    } else if ((humanChoice === "rock" && comChoice === "paper") || (humanChoice === "paper" && comChoice === "scissor") || (humanChoice === "scissor" && comChoice === "rock")) {
        computerScore ++
        console.log(`You lose! ${comChoice} beats ${humanChoice}!${humanScore}:${computerScore}.`);
    } else if ((humanChoice === "rock" && comChoice === "scissor") || (humanChoice === "paper" && comChoice === "rock") || (humanChoice === "scissor" && comChoice === "paper")) {
        humanScore ++
        console.log(`You win! ${humanChoice} beats ${comChoice}! ${humanScore}:${computerScore}.`);
    } else {
        console.log("You gave me no choice.")
    }
};

function playGame() {
        playRound();
        playRound();
        playRound();
        playRound();
        playRound();
    if (humanScore > computerScore) {
        return console.log(`You are the winner! ${humanScore}:${computerScore}.`)
    } else if (humanScore < computerScore) {
        return console.log(`You are the loser! ${humanScore}:${computerScore}.`)
    } else {
        return console.log(`Draw! ${humanScore}:${computerScore}.`)
    }
}

playGame();






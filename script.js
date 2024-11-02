function getComputerChoice (comChoice) {
    let random = Math.floor(Math.random() * 3)
        if (random == 0) {
            comChoice = "Rock";
        } else if (random == 1) {
            comChoice = "Paper";
        } else {
            comChoice = "Scissor";
        }
    return comChoice;
};

console.log(getComputerChoice());
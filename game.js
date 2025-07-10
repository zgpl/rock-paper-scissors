function getComputerChoice() {
    const computerChoice = Math.floor (Math.random()* 3);

    if (computerChoice === 0) {
       return "rock"
    }
    else if (computerChoice === 1) {
       return "paper"
    }
    else if (computerChoice === 2) {
     return "scissors"
    }
}

console.log ("Computer choice =", getComputerChoice());

function getHumanChoice () {
    let humanChoice = prompt ("What do you say? Rock, paper or scissors?");
    return humanChoice;
}

console.log ("Human choice =", getHumanChoice());
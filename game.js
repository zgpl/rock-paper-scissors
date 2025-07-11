let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice () {
    let humanChoice = prompt ("What do you say? Rock, paper or scissors?");
    return humanChoice.toLowerCase();
}

const humanSays = getHumanChoice();
const computerSays = getComputerChoice();

function playRound (humanSays, computerSays) {

     if (humanSays === computerSays) {
        return `You both chose ${computerSays}. It's a tie.`;
     }

     else if (humanSays === "paper" && computerSays === "rock") {
        humanScore++;
        return `Paper beats rock. You won! :)`;
     }

     else if (humanSays === "rock" && computerSays === "scissors") {
        humanScore++;
        return `Rock beats scissors. You won! :)`;
     }

     else if (humanSays === "scissors" && computerSays === "paper") {
        humanScore++;
        return `Scissors beats paper. You won! :)`;   
     }
     
     else if (computerSays === "paper" && humanSays === "rock") {
        computerScore++;
        return `Paper beats rock. Sorry bud :(`;
     }

     else if (computerSays === "rock" && humanSays === "scissors") {
        computerScore++;
        return `Rock beats scissors. Sorry bud :(`;
     }

     else if (computerSays === "scissors" && humanSays === "paper") {
        computerScore++;
        return `Scissors beats paper. Sorry bud :(`;   
     }
}

// console.log (`The computer chose ${computerSays} and you chose ${humanSays}.`);
console.log (playRound(humanSays, computerSays));
console.log (`Score: You ${humanScore} | Your arch nemesis ${computerScore}`)
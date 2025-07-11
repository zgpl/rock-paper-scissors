function playGame () {

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
        let humanChoice = prompt ("rock, paper or scissors? :D");
        return humanChoice.toLowerCase();
    }    

   function playRound (humanSays, computerSays) {

        if (humanSays === computerSays) {
            return `You both chose ${computerSays}. It's a tie.\n\nScore: You ${humanScore} | Your arch nemesis ${computerScore}`;
        }

        else if (
            (humanSays === "paper" && computerSays === "rock") || 
            (humanSays === "rock" && computerSays === "scissors") ||
            (humanSays === "scissors" && computerSays === "paper")
        ){
            humanScore++;
            return `Computer chose ${computerSays}. You won this round! :)\n\nScore: You ${humanScore} | Your arch nemesis ${computerScore}`;
        }
        
        else {
            computerScore++;
            return `Computer chose ${computerSays}. You lost this round :(\n\nScore: You ${humanScore} | Your arch nemesis ${computerScore}`;
        }
    }

    function playSingleRound() {
        const humanSays = getHumanChoice();
        const computerSays = getComputerChoice();
        console.log(playRound(humanSays, computerSays));
      }
    
      playSingleRound();
      playSingleRound();
      playSingleRound();
      playSingleRound();
      playSingleRound();

    function declareWinner (){
        if (humanScore > computerScore){
            return `\nYOU WON 🎉 I knew you could do it ;)`
        }
    
        else if (computerScore > humanScore){
            return `\nYOU LOST 😭 What a bummer!`
        }
    
        else {
            return `\nIT'S A TIE! How anti-climatic!`
        }
    }

    console.log(declareWinner());

}

playGame();
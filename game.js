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

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    
    // function getHumanChoice () {
    //     let humanChoice = prompt ("rock, paper or scissors? :D");
    //      return humanChoice.toLowerCase();
    // }    

   function playRound (humanSays, computerSays) {
        if (humanSays === computerSays) {
            return `<br>You both chose ${computerSays}. It's a tie.<br><br>You: ${humanScore}<br>Your arch nemesis: ${computerScore}`;
        }
        else if (
            (humanSays === "paper" && computerSays === "rock") || 
            (humanSays === "rock" && computerSays === "scissors") ||
            (humanSays === "scissors" && computerSays === "paper")
        ){
            humanScore++;
            return `<br>${capitalize(humanSays)} beats ${computerSays}. You won :)<br><br>You: ${humanScore}<br>Your arch nemesis: ${computerScore}`;
        }       
        else {
            computerScore++;
            return `<br>${capitalize(computerSays)} beats ${humanSays}. You lost :(<br><br>You: ${humanScore}<br>Your arch nemesis: ${computerScore}`;
        }
    }

    function declareWinner (){
        if (humanScore > computerScore){
            confetti({
                particleCount: 300,
                spread: 360,
                startVelocity: 60,
                origin: {y: 0.4},
                colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']
            });
            return `<br><br><b>YOU WON 🎉</b>`
        }
        else if (computerScore > humanScore){
            return `<br><br><b>YOU LOST 😭</b>`
        }  
        else {
            return `<br><br><b>IT'S A TIE!</b><br>How anti-climatic!`
        }
    }

   // function playSingleRound() {
   //     const humanSays = getHumanChoice();
   //     const computerSays = getComputerChoice();
   //     console.log(playRound(humanSays, computerSays));
   //   }
    
    //  playSingleRound();
    //  playSingleRound();
    //  playSingleRound();
    //  playSingleRound();
    //  playSingleRound();

    const buttons = document.querySelectorAll('.btn');
    const result = document.getElementById("result");
    const winner = document.getElementById("winner");
    const playAgain = document.getElementById("again");
    
    playAgain.addEventListener("click", function() {
        window.location.reload();
    });

    buttons.forEach (button => {
        button.addEventListener("click", function(event) {
        const humanSays = event.target.id;
        const computerSays = getComputerChoice();
        result.innerHTML = playRound(humanSays, computerSays);
        if (humanScore === 5 || computerScore === 5) {
            winner.innerHTML = declareWinner();
            buttons.forEach(button => button.disabled = true);
            playAgain.style.visibility = "visible";
        }
        });
    });

}
playGame();
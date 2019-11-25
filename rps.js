let playerChoice;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const score = document.querySelector('#score');

const scoreboard = document.createElement('div');
scoreboard.id = 'scoreboard';
score.appendChild(scoreboard);

const result = document.createElement('div');
result.id = 'result';
score.appendChild(result);
    

    function computerPlay() {
        let random = Math.random();
        
        if (random < 0.3) {
            computerSelection = 'rock';
        } else if (random > 0.3 && random < 0.6) {
            computerSelection = 'paper';
        } else if (random > 0.6) {
            computerSelection = 'scissors';
        }
        return computerSelection;
    }

    function oneRound(playerChoice, computerChoice) {

      if (playerChoice === computerChoice) {
        return 'It is a tie!';
      } 
      
      else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            playerScore++;
          return 'Rock beats scissors. Human wins!';
        } else {
          return computerScore++;
          return 'Paper beats rock. Computer wins!';
        }
      }

      else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
          return playerScore++;
          return 'Paper beats rock. Human wins!'
        } else {
          return computerScore++;
          return 'Scissors beats paper. Computer wins!';
        }
      }

      else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
          return playerScore++;
          return 'Scissors beats paper. Human wins!';
        } else {
          return computerScore++;
          return 'Rock beats scissors. Computer wins!';
        }
      }
    
    }

    /*function game(){
      
      for (let i = 0; i < 5; i++) {
        let input = prompt('Rock, paper, or scissors?');
        console.log(oneRound(input, computerPlay()));
        console.log('Computer: ' + computerScore);
        console.log('Human: ' + playerScore);   
      }*/
      
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            playerChoice = button.id;

            oneRound(playerChoice, computerPlay());
            
            scoreboard.textContent += `Computer: ${computerScore}
Human: ${playerScore}`;
            
            


            /*console.log(`Computer: ${computerScore}
Human: ${playerScore}`);*/
        });
      });

    

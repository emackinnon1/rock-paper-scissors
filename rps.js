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
        document.getElementById('result').textContent = 'It is a tie!';
      } 
      
      else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            playerScore++;
          document.getElementById('result').textContent = 'Rock beats scissors. Human wins!';
          
        } else {
          computerScore++;
          document.getElementById('result').textContent = 'Paper beats rock. Computer wins!';
          
        }
      }

      else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
          playerScore++;
          document.getElementById('result').textContent = 'Paper beats rock. Human wins!';
          
        } else {
          computerScore++;
          document.getElementById('result').textContent = 'Scissors beats paper. Computer wins!';
          
        }
      }

      else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
          playerScore++;
          document.getElementById('result').textContent = 'Scissors beats paper. Human wins!';
          
        } else {
          computerScore++;
          document.getElementById('result').textContent = 'Rock beats scissors. Computer wins!';
          
        }
      }
    
    }

      
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            playerChoice = button.id;

            oneRound(playerChoice, computerPlay());
            document.getElementById('scoreboard').textContent = `Computer: ${computerScore}
            Human: ${playerScore}`;
            
        });
      });

    

let playerChoice;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let roundCount = 0;

const score = document.querySelector('#score');

const scoreboard = document.createElement('div');
scoreboard.id = 'scoreboard';
score.appendChild(scoreboard);

const result = document.createElement('div');
result.id = 'result';
score.appendChild(result);

const buttons = document.querySelectorAll('button');

const buttonDiv = document.getElementById('buttons');


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
        roundCount++;
      }

      else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            playerScore++;
          document.getElementById('result').textContent = 'Rock beats scissors. Human wins!';
          roundCount++;
        } else {
          computerScore++;
          document.getElementById('result').textContent = 'Paper beats rock. Computer wins!';
          roundCount++;
        }
      }

      else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
          playerScore++;
          document.getElementById('result').textContent = 'Paper beats rock. Human wins!';
          roundCount++;
        } else {
          computerScore++;
          document.getElementById('result').textContent = 'Scissors beats paper. Computer wins!';
          roundCount++;
        }
      }

      else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
          playerScore++;
          document.getElementById('result').textContent = 'Scissors beats paper. Human wins!';
          roundCount++;
        } else {
          computerScore++;
          document.getElementById('result').textContent = 'Rock beats scissors. Computer wins!';
          roundCount++;
        }
      }
    }


      
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
      playerChoice = button.id;

      fullGame(oneRound(playerChoice, computerPlay()));
      document.getElementById('scoreboard').textContent = `Computer: ${computerScore}
      Human: ${playerScore}`;
  });
});

function fullGame() {
  if (roundCount > 4) {
    buttonDiv.style.display = 'none';

    if (playerScore > computerScore) {
    result.textContent = `Human wins game with ${playerScore} points!`;
  } else if (playerScore < computerScore) {
    result.textContent = `Computer wins game with ${computerScore} points!`;
  } else if (playerScore === computerScore) {
    result.textContent = `It's a tie!`;
  }
 }
 return;
}

let userScore = document.getElementById('youscore');
let pcScore = document.getElementById('pcscore');

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', function() { playGame(0); });
paperBtn.addEventListener('click', function() { playGame(1); });
scissorsBtn.addEventListener('click', function() { playGame(2); });

function playGame(userChoice) {
  let pcChoice = Math.floor(Math.random() * 3);
  
  if (userChoice === 0 && pcChoice === 2 || 
      userChoice === 1 && pcChoice === 0 || 
      userChoice === 2 && pcChoice === 1) {
    userScore.textContent = parseInt(userScore.textContent) + 1;
    alert('You win!');
  } else if (userChoice === pcChoice) {
    alert('Tie game!');
  } else {
    pcScore.textContent = parseInt(pcScore.textContent) + 1;
    alert('You lose!');
  }
}
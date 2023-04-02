let pcResult = document.getElementById('pcchose');

let userScore = document.getElementById('youscore');
let pcScore = document.getElementById('pcscore');

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', function() { playGame(0); });
paperBtn.addEventListener('click', function() { playGame(1); });
scissorsBtn.addEventListener('click', function() { playGame(2); });


function playGame(userChoice) {
  
  let choices = ['<i class="fa-solid fa-hand-back-fist"></i>', '<i class="fa-solid fa-hand"></i>', '<i class="fa-sharp fa-solid fa-hand-scissors"></i>'];
 
  let pcChoice = Math.floor(Math.random() * 3);
 
  if (userChoice === 0 && pcChoice === 2 || 
      userChoice === 1 && pcChoice === 0 || 
      userChoice === 2 && pcChoice === 1) {
    userScore.textContent = parseInt(userScore.textContent) + 1;
    pcResult.innerHTML = `PC Chose : ${choices[pcChoice]} <br> <em> You win! </em> `
    //alert(`PC Chose : ${choices[pcChoice]} , You win!`);
  } else if (userChoice === pcChoice) {
    pcResult.innerHTML = `PC Chose : ${choices[pcChoice]} <br> <em> Draw! </em> `
    //alert(`PC Chose : ${choices[pcChoice]} , Draw Game!`);
  } else {
    pcResult.innerHTML = `PC Chose : ${choices[pcChoice]} <br> <em> PC Wins! <em>`
    pcScore.textContent = parseInt(pcScore.textContent) + 1;
    //alert(`PC Chose : ${choices[pcChoice]} , PC wins!`);
  }
}


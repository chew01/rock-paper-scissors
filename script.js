let wins = 0;
let draws = 0;
let losses = 0;
let scoreboard = document.querySelector('.display');
let score = document.createElement('p');
let result = document.createElement('p');

function computerPlay() {
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
}

function setPlayerSelection(e) {
  if (wins === 5) {
    result.textContent = 'You win!';
    scoreboard.appendChild(result);
    return;
  }
  if (losses === 5) {
    result.textContent = 'You lose!';
    scoreboard.appendChild(result);
    return;
  }
  play(this.dataset.move, computerPlay());
  score.textContent = `${wins} wins, ${losses} losses, ${draws} draws`;
  scoreboard.appendChild(score);
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', setPlayerSelection));

function play(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    switch (computerSelection) {
      case "Rock":
        draws++;
        return "Draw!";
      case "Paper":
        losses++;
        return "You lose! Paper beats Rock.";
      default:
        wins++;
        return "You win! Rock beats Scissors.";
    }
  }
  if (playerSelection.toLowerCase() === "scissors") {
    switch (computerSelection) {
      case "Rock":
        losses++;
        return "You lose! Rock beats Scissors.";
      case "Paper":
        wins++;
        return "You win! Scissors beats Paper.";
      default:
        draws++;
        return "Draw!";
    }
  }
  if (playerSelection.toLowerCase() === "paper") {
    switch (computerSelection) {
      case "Rock":
        wins++;
        return "You win! Paper beats Rock.";
      case "Paper":
        draws++;
        return "Draw!";
      default:
        losses++;
        return "You lose! Scissors beats Paper.";
    }
  }
}

/*
function game() {
  wins = 0;
  losses = 0;
  draws = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper, Scissors?', '');
    if (playerSelection === null) {
      alert('Canceled!');
      break;
    }
    if (
      playerSelection.toLowerCase() !== 'rock' &&
      playerSelection.toLowerCase() !== 'scissors' &&
      playerSelection.toLowerCase() !== 'paper'
    ) {
      alert('Invalid!');
      i--;
      continue;
    }
    console.log(play(playerSelection, computerPlay()));
  }
  console.log(`${wins} wins, ${losses} losses, ${draws} draws`);
  if (wins > losses) {
      console.log('You win!');
  } else if (wins < losses) {
      console.log('You lose!');
  } else {
      console.log('You draw!');
  }
}

game();

*/
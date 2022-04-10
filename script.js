let playerWins = 0;
let computerWins = 0;
let rounds = 0;
let tie = 0;

function computerPlay() {
  const hand = ["Rock", "Paper", "Scissors"];
  return hand[randomNumber()];
}

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    countTies();
    countRounds();
  }

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "Paper") {
      countComputerScore();
      countRounds();
    } else if (computerSelection === "Scissors") {
      countPlayerScore();
      countRounds();
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "Paper") {
      countPlayerScore();
      countRounds();
    } else if (computerSelection === "Rock") {
      countComputerScore();
      countRounds();
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "Rock") {
      countPlayerScore();
      countRounds();
    } else if (computerSelection === "Scissors") {
      countComputerScore();
      countRounds();
    }
  }
}

function countRounds() {
  rounds++;
  roundsPlayed.textContent = rounds;
}

function countPlayerScore() {
  playerWins++;
  playerScore.textContent = playerWins;
}

function countComputerScore() {
  computerWins++;
  computerScore.textContent = computerWins;
}

function countTies() {
  tie++;
  ties.textContent = tie;
}

function clear() {
  playerWins = 0;
  computerWins = 0;
  rounds = 0;
  tie = 0;
  winner.textContent = "";
  roundsPlayed.textContent = 0;
  ties.textContent = 0;
  computerScore.textContent = 0;
  playerScore.textContent = 0;
}

function callClearBtn() {
  clearBtn.textContent = "play again";
  clearBtn.addEventListener("click", clear);
  winner.appendChild(clearBtn);
}

const body = document.querySelector("body");
const winner = document.querySelector(".winner");
const buttons = document.querySelectorAll("button");
const roundsPlayed = document.querySelector(".roundsPlayed");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const ties = document.querySelector(".ties");
const clearBtn = document.createElement("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!winner.textContent) {
      playRound(e.target.value, computerPlay());
      if (playerWins >= 5) {
        winner.textContent = "YOU WIN!";
        callClearBtn();
      }
      if (computerWins >= 5) {
        winner.textContent = "YOU LOSE!";
        callClearBtn();
      }
    }
  });
});

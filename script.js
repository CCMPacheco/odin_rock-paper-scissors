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
    rounds++;
    roundsPlayed.textContent = rounds;
    tie++;
    ties.textContent = tie;
  }

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "Paper") {
      computerWins++;
      computerScore.textContent = computerWins;
      rounds++;
      roundsPlayed.textContent = rounds;
    } else if (computerSelection === "Scissors") {
      playerWins++;
      playerScore.textContent = playerWins;
      rounds++;
      roundsPlayed.textContent = rounds;
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "Paper") {
      playerWins++;
      playerScore.textContent = playerWins;
      rounds++;
      roundsPlayed.textContent = rounds;
    } else if (computerSelection === "Rock") {
      computerWins++;
      computerScore.textContent = computerWins;
      rounds++;
      roundsPlayed.textContent = rounds;
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "Rock") {
      playerWins++;
      playerScore.textContent = playerWins;
      rounds++;
      roundsPlayed.textContent = rounds;
    } else if (computerSelection === "Scissors") {
      computerWins++;
      computerScore.textContent = computerWins;
      rounds++;
      roundsPlayed.textContent = rounds;
    }
  }
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
        winner.textContent = "PLAYER WINS!";
        clearBtn.textContent = "play again";
        clearBtn.addEventListener("click", clear);
        winner.appendChild(clearBtn);
      }
      if (computerWins >= 5) {
        winner.textContent = "COMPUTER WINS!";
        clearBtn.textContent = "play again";
        clearBtn.addEventListener("click", clear);
        winner.appendChild(clearBtn);
      }
    }
  });
});

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

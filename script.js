let playerWins = 0;
let computerWins = 0;
let rounds = 0;
let tie = 0;

function computerPlay() {
    const hand = ['Rock', 'Paper', 'Scissors'];
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

    if (playerSelection.toLowerCase() === 'rock') {
        if(computerSelection === 'Paper') {
            computerWins++;
            computerScore.textContent = computerWins;
            rounds++;
            roundsPlayed.textContent = rounds;
        } else if (computerSelection === 'Scissors') {
            playerWins++;
            playerScore.textContent = playerWins;
            rounds++;
            roundsPlayed.textContent = rounds;
        }
    }

    if (playerSelection.toLowerCase() === 'scissors') {
        if(computerSelection === 'Paper') {
            playerWins++;
            playerScore.textContent = playerWins;
            rounds++;
            roundsPlayed.textContent = rounds;
        } else if (computerSelection === 'Rock') {
            computerWins++;
            computerScore.textContent = computerWins;
            rounds++;
            roundsPlayed.textContent = rounds;
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'Rock') {
            playerWins++;
            playerScore.textContent = playerWins;
            rounds++;
            roundsPlayed.textContent = rounds;
        } else if (computerSelection === 'Scissors') {
            computerWins++;
            computerScore.textContent = computerWins;
            rounds++;
            roundsPlayed.textContent = rounds;
        }
    }
}

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const roundsPlayed = document.querySelector('.roundsPlayed');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const ties = document.querySelector('.ties');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(playRound(e.target.value, computerPlay()));
  });
});



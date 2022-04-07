let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    const hand = ['Rock', 'Paper', 'Scissors'];
    return hand[randomNumber()];
}

function randomNumber() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a Tie!";
    }

    if (playerSelection.toLowerCase() === 'rock') {
        if(computerSelection === 'Paper') {
            computerWins++;
            return 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'Scissors') {
            playerWins++;
            return 'You Win! Rock beats Scissors';
        }
    }

    if (playerSelection.toLowerCase() === 'scissors') {
        if(computerSelection === 'Paper') {
            playerWins++;
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'Rock') {
            computerWins++;
            return 'You Lose! Rock beats Scissors';
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'Rock') {
            playerWins++;
            return 'You Win! Paper beats Rock';
        } else if (computerSelection === 'Scissors') {
            computerWins++;
            return 'You Lose! Scissors beats Paper';
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerPlay()));
    }

    if (playerWins > computerWins) {
        return console.log('Player Wins!');
    } else if (playerWins < computerWins) {
        return console.log('Player Loses :(');
    } else {
        return console.log('Game was a Tie');
    }
}

const playerSelection = prompt('Choose Paper, Rock or Scissors');
game();
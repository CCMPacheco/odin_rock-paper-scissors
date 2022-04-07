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
            return 'You Lose! Paper beats Rock'
        } else if (computerSelection === 'Scissors') {
            return 'You Win! Rock beats Scissors'
        }
    }

    if (playerSelection.toLowerCase() === 'scissors') {
        if(computerSelection === 'Paper') {
            return 'You Win! Scissors beats Paper'
        } else if (computerSelection === 'Rock') {
            return 'You Lose! Rock beats Scissors'
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'Rock') {
            return 'You Win! Paper beats Rock'
        } else if (computerSelection === 'Scissors') {
            return 'You Lose! Scissors beats Paper'
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerPlay()));
    }
}

const playerSelection = "scissors";
game();
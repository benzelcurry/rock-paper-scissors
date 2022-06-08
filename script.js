/* Pseudocode for project:
    1. Create function computerPlay to randomly return rock, paper, or scissors
    2. Create function playRound() to process the results
        2.1. Take two parameters: playerSelection, computerSelection
        2.2. Return string that declares winner
            2.2.1. ex. "You lose! Paper beats Rock"
        2.3. Make function case-insensitive
        2.4. Make function return the results
    3. Create function called game()
        3.1. Call playRound() function
        3.2. Use for loop to make game last five rounds
        3.3. Use console.log() to display results of each round and final winner
        3.4. Use prompt() to get input from user */


// determine the computer's choice
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// determine the winner of a round
function playRound(playerSelection, computerSelection) {

    // declare variables for player and computer scores
    let playerScore = 0;
    let computerScore = 0;

    // determine results of round
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Draw! Both users selected rock.";
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats rock.";
            computerScore++;
        } else {
            return "You win! Rock beats scissors.";
            playerScore++;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock.";
            playerScore++;
        } else if (computerSelection == "paper") {
            return "Draw! Both users selected paper.";
        } else {
            return "You lose! Scissors beats paper.";
            computerScore++;
        }
    } else {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors.";
            computerScore++;
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats paper."
            playerScore++;
        } else {
            return "Draw! Both users selected scissors.";
        }
    }
}

// play the game
function game() {
    for (let i = 0; i < 5; i++) {
        // take prompt from player and convert to lowercase
        let playerChoice = prompt("Pick rock, paper, or scissors.");
        let playerSelection = playerChoice.toLowerCase();
    }
}
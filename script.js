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

let playerScore = 0;
let computerScore = 0;
    

// determine the computer's choice
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// determine the winner of a round
function playRound(playerSelection, computerSelection) {

    // declare variables for player and computer scores

    // determine results of round
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("Draw! Both users selected rock.");
            return playerScore, computerScore;
        } else if (computerSelection == "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock.");
            return playerScore, computerScore;
        } else {
            playerScore++;
            console.log("You win! Rock beats scissors.");
            return playerScore, computerScore;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            console.log("You win! Paper beats rock.");
            return playerScore, computerScore;
        } else if (computerSelection == "paper") {
            console.log("Draw! Both users selected paper.");
            return playerScore, computerScore;
        } else {
            computerScore++;
            console.log("You lose! Scissors beats paper.");
            return playerScore, computerScore;
        }
    } else {
        if (computerSelection == "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors.");
            return playerScore, computerScore;
        } else if (computerSelection == "paper") {
            playerScore++;
            console.log("You win! Scissors beats paper.");
            return playerScore, computerScore;
        } else {
            console.log("Draw! Both users selected scissors.");
            return playerScore, computerScore;
        }
    }

    
}

// play the game
function game() {

    for (let i = 0; i < 5; i++) {
        // take prompt from player and convert to lowercase
        let computerSelection = computerPlay();
        let playerChoice = prompt("Pick rock, paper, or scissors.");
        let playerSelection = playerChoice.toLowerCase();

        playRound(playerSelection, computerSelection);
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);

        if (i == 4) {
            if (playerScore == computerScore) {
                console.log("It's a draw; nobody wins.");
                return;
            } else if (playerScore > computerScore) {
                console.log("You win!");
                return;
            } else {
                console.log("You lose!");
                return;
            }
        }
    }
} 
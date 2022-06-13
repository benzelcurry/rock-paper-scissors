let playerScore = 0;
let computerScore = 0;
    

// determine the computer's choice
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// determine the winner of a round
function playRound(playerSelection, computerSelection) {

    // determine results of round
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            roundWinner.textContent = "Draw! Both users selected rock.";
            return playerScore, computerScore;
        } else if (computerSelection == "paper") {
            computerScore++;
            roundWinner.textContent = "You lose! Paper beats rock.";
            return playerScore, computerScore;
        } else {
            playerScore++;
            roundWinner.textContent = "You win! Rock beats scissors.";
            return playerScore, computerScore;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            roundWinner.textContent = "You win! Paper beats rock.";
            return playerScore, computerScore;
        } else if (computerSelection == "paper") {
            roundWinner.textContent = "Draw! Both users selected paper.";
            return playerScore, computerScore;
        } else {
            computerScore++;
            roundWinner.textContent = "You lose! Scissors beats paper.";
            return playerScore, computerScore;
        }
    } else {
        if (computerSelection == "rock") {
            computerScore++;
            roundWinner.textContent = "You lose! Rock beats scissors.";
            return playerScore, computerScore;
        } else if (computerSelection == "paper") {
            playerScore++;
            roundWinner.textContent = "You win! Scissors beats paper.";
            return playerScore, computerScore;
        } else {
            roundWinner.textContent = "Draw! Both users selected scissors.";
            return playerScore, computerScore;
        }
    }

    
}

// results section
const results = document.querySelector('#results');

const activeScore = document.createElement('div');
activeScore.classList.add('activeScore');

const roundWinner = document.createElement('div');
roundWinner.classList.add('roundWindder');

const finalScore = document.createElement('div');
finalScore.classList.add('finalScore');

function displayWinner(playerScore, computerScore) {
    if ((playerScore > computerScore) && (playerScore == 5)) {
        finalScore.textContent = "You win!";
        playerScore = undefined;
        computerScore = undefined;
    } else if ((computerScore > playerScore) && (computerScore == 5)) {
        finalScore.textContent = "You lose!";
        playerScore = undefined;
        computerScore = undefined;
    } else {
        finalScore.textContent = "";
    }
}

results.appendChild(activeScore);
results.appendChild(roundWinner);
results.appendChild(finalScore);

// rock button
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
    activeScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    displayWinner(playerScore, computerScore);
});

// paper button
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
    activeScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    displayWinner(playerScore, computerScore);
})

// scissors button
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
    activeScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
    displayWinner(playerScore, computerScore);
})

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

/* legacy code for running the game; leaving here for future reference
function game() {

    for (let i = 0; i < 5; i++) {
        // take prompt from player and convert to lowercase
        let playerChoice = prompt("Pick rock, paper, or scissors.");
        let playerSelection = playerChoice.toLowerCase();
        // convert computer's choice to lowercase
        let computerChoice = computerPlay();
        let computerSelection = computerChoice.toLowerCase();

        playRound(playerSelection, computerSelection);
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);

        
    
        if (i == 4) {
            if (playerScore == computerScore) {
                console.log(`It's a draw; nobody wins. Player score: ${playerScore} Computer score: ${computerScore}`);
                return;
            } else if (playerScore > computerScore) {
                console.log(`You win! Player score: ${playerScore} Computer score: ${computerScore}`);
                return;
            } else {
                console.log(`You lose! Player score: ${playerScore} Computer score: ${computerScore}`);
                return;
            }
        }
    }
} */
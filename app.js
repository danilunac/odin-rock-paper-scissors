// CREAR variable para almacenar la puntuación del usuario
let humanScore = 0;
// CREAR variable para almacenar la puntuación del ordenador
let computerScore = 0;

function getComputerChoice() {
    // GENERAR número aleatorio entre 1 y 3, incluidos
    // SI el número es 1 ENTONCES
    //     DEVOLVER "piedra"
    // SINO SI el número es 2 ENTONCES
    //     DEVOLVER "papel"
    // SINO
    //     DEVOLVER "tijeras"
    let output = Math.floor(Math.random() * 3) + 1;
    if (output === 1) {
        console.log('rock');
        return 'rock';
    } else if (output === 2) {
        console.log('paper');
        return 'paper';
    } else if (output === 3) {
        console.log('scissors');
        return 'scissors';
    }
}

// getComputerChoice();

function getHumanChoice() {
    let userChoice = prompt('Rock, paper or scissors?').toLowerCase();
    console.log(userChoice);
    return userChoice;
}

// getHumanChoice();

function playRound(humanChoice, computerChoice) {
    // ANUNCIAR el ganador de la ronda
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice === computerChoice) {
        console.log('It\'s a draw! You both chose rock!');
    }
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
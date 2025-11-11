function getComputerChoice() {
    // GENERATE a random number between 1 and 3 inclusive
    let output = Math.floor(Math.random() * 3) + 1;

    // IF the number is 1 THEN
    if (output === 1) {
        // RETURN "rock"
        return 'rock';
    // ELSE IF the number is 2 THEN
    } else if (output === 2) {
        // RETURN "paper"
        return 'paper';
    // ELSE
    } else {
        // RETURN "scissors"
        return 'scissors';
    }
}

function getHumanChoice() {
    let userChoice = prompt('Rock, paper or scissors?').toLowerCase();
    return userChoice;
}

function playGame() {
    // CREATE variable to store the user's score
    let humanScore = 0;
    // CREATE variable to store the computer's score
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            return humanScore;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
            return computerScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            return humanScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            return computerScore;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            return humanScore;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            return computerScore;
        } else if (humanChoice === computerChoice) {
            humanScore += 0;
            computerScore += 0;
        }
    }   

    const humanSelectionRound1 = getHumanChoice();
    const computerSelectionRound1 = getComputerChoice();

    const humanSelectionRound2 = getHumanChoice();
    const computerSelectionRound2 = getComputerChoice();

    const humanSelectionRound3 = getHumanChoice();
    const computerSelectionRound3 = getComputerChoice();

    const humanSelectionRound4 = getHumanChoice();
    const computerSelectionRound4 = getComputerChoice();

    const humanSelectionRound5 = getHumanChoice();
    const computerSelectionRound5 = getComputerChoice();

    playRound(humanSelectionRound1, computerSelectionRound1);
    playRound(humanSelectionRound2, computerSelectionRound2);
    playRound(humanSelectionRound3, computerSelectionRound3);
    playRound(humanSelectionRound4, computerSelectionRound4);
    playRound(humanSelectionRound5, computerSelectionRound5);
    
    if (humanScore > computerScore) {
        console.log(`You win! Final score: You ${humanScore} - ${computerScore} Computer`);
    } else if (computerScore > humanScore) {
        console.log(`You lose! Final score: You ${humanScore} - ${computerScore} Computer`);
    } else {
        console.log(`It's a draw! Final score: You ${humanScore} - ${computerScore} Computer`);
    }    
}

playGame();
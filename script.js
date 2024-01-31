const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const resultContainer = document.getElementById('result');

rockButton.addEventListener('click', () => {
    const playerChoice = 'rock';
    const computerChoice = getRandomChoice();
    displayResult(playerChoice, computerChoice);
});

paperButton.addEventListener('click', () => {
    const playerChoice = 'paper';
    const computerChoice = getRandomChoice();
    displayResult(playerChoice, computerChoice);
});

scissorsButton.addEventListener('click', () => {
    const playerChoice = 'scissors';
    const computerChoice = getRandomChoice();
    displayResult(playerChoice, computerChoice);
});

function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function displayResult(playerChoice, computerChoice) {
    resultContainer.textContent = `
        You: ${playerChoice}
        Computer: ${computerChoice}

        ${determineResult(playerChoice, computerChoice)}
    `;
}

function determineResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'You win!';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

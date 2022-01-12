// creating variables that create h1 tag into HTML for all factors of the game
// and appending them all into the div that is in the variable gameGrid
const userChoiceDisplay = document.createElement('h1')
const userPointsDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h1')
const computerPointsDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h1')
const winnerDisplay = document.createElement('h1')
const restart = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay,userPointsDisplay, computerChoiceDisplay, computerPointsDisplay, resultDisplay,  winnerDisplay)

//creating a array of with the choices 
const choices = ['rock', 'paper', 'scissors']

let userChoice
let computerChoice

// creating a function for te user's choice as well as displaying it in the html 
const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice;
    generateComputerChoice()
    checkWinner()
    addPoint()
    computerPointsDisplay.textContent = `Computer Score: ${compPoints}`;
    userPointsDisplay.textContent = `Your Score: ${userPoints}`;
    ++rounds;
    results()
    removeButtons()
}

// creating a function for the comptuer choice that is developed randomly through Math.random
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

// creating a button for all the choices that user can pick 
// and using an event listener to trigger the result of choice 
// appending the button into the div (gameGrid)
for(let i=0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)

    function removeButtons() {
        if (rounds == 5) {
            button.removeEventListener('click', handleClick);
        }
    }
}

// creating a function to show all the results of the game 
// once the user chooses a choice, it displays whether or not the user won, lost, or a tie
const checkWinner = () => {
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            resultDisplay.innerHTML = "You lost this round, paper beats rock.";
        } else if (computerChoice === "scissors") {
            resultDisplay.innerHTML = "You won this round, rock beats scissors."
        } else if (computerChoice === "rock") {
            resultDisplay.innerHTML = "It's a Tie, both picked rock.";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "paper") {
            resultDisplay.innerHTML = "It's a Tie, both picked paper.";
        } else if (computerChoice === "scissors") {
            resultDisplay.innerHTML = "You lost this round, scissors beats paper.";
        } else if (computerChoice === "rock") {
            resultDisplay.innerHTML = "You won this round, paper beats rock.";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper"){
            resultDisplay.innerHTML = "You won this round, scissors beat paper."
        } else if (computerChoice === "scissors") {
            resultDisplay.innerHTML = "It's a Tie, both picked scissors.";
        } else if (computerChoice === "rock") {
            resultDisplay.innerHTML = "You lost this round, rock beats scissors";
        }
    } else {
        resultDisplay.innerHTML = "there is an error in the playRound function";
    }
    }

// need to create a function that also keeps track of points
function addPoint() {
    if (resultDisplay.innerHTML.includes('You lost this round')) {
       ++compPoints;
        console.log('Computer wins: ' + compPoints);
    } else if (resultDisplay.innerHTML.includes('You won this round')) {
        ++userPoints;
        console.log('User wins: ' + userPoints);
    return {userPoints, compPoints};
    }
}

// need to create a function that tells you if you lost, won, or tied from all 5 rounds
// determine when the games stop based on the total points of either computer or user reaching

function results () {
    if (rounds == 5) {
        if(userPoints > compPoints) {
            winnerDisplay.innerHTML = "You won the game";
        } else if (userPoints < compPoints) {
            winnerDisplay.innerHTML = "You lost the game, maybe next time!";
        }
        else if (userPoints == compPoints) {
            winnerDisplay.innerHTML = "It's a tie!";
        }
    }
}


let userPoints = 0;
let compPoints = 0; 
let rounds = 0;

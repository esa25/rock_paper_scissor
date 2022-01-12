# rock_paper_scissor

Pseudocode:
User chooses Rock, Paper, or Scissors 
Computer generates either Rock, Paper, or Scissors
Layout all possible outcomes:
    Rock vs. Paper (paper wins)
    Rock vs. Rock (tie)
    Rock vs. Scissors (rock wins)
    Paper vs. Paper (tie)
    Paper vs. Rock (paper wins)
    Paper vs. Scissors (scissors wins)
    Scissors vs. Paper (scissors wins)
    Scissors vs. Rock (rock wins)
    Scissors vs. Scissors (tie)
Give outpput of the game
Repeat 5 times by looping
Display the final output of the game:
    if user's score is > computer's score = you won!
    if user's score is < computer's score = you lost, maybe next time!
    if user's score is = computer's score = its a tie!
Ask user if they want to play again, create a restart button




//this is the javascrpit from scartch....
let userScore = 0;
let compScore = 0;

// created a prompt for user to choose between the three variables of the game, 
let userChoice = prompt("Rock, Paper, or Scissors", " ");
console.log(userChoice);

//for computer to choose, I usied array to store the three choices in a single variable, then using math.floor & math.random to choose one of the three choices by random
function computerPlay() {
    var choices = ['rock','paper','scissors'];
    let randomPick = Math.floor(Math.random() * choices.length);
    return (choices[randomPick]);
}

//laying out all possible outcomes of the game in the playRound function to give the proper return value.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "Rock" || playerSelection === "rock") {
        if (computerSelection === "Paper" || computerSelection === "paper") {
            return "You lost this round, paper beats rock.";
        } else if (computerSelection === "Scissors" || computerSelection === "scissors") {
            return "You won this round, rock beats scissors."
        } else if (computerSelection === "Rock" || computerSelection === "rock") {
            return "It's a Tie, both picked rock.";
        }
    } else if (playerSelection === "Paper" || playerSelection === "paper") {
        if (computerSelection === "Paper" || computerSelection === "paper") {
            return "It's a Tie, both picked paper.";
        } else if (computerSelection === "Scissors" || computerSelection === "scissors") {
            return "You lost this round, scissors beats paper.";
        } else if (computerSelection === "Rock" || computerSelection === "rock") {
            return "You won this round, paper beats rock.";
        }
    } else if (playerSelection === "Scissors" || playerSelection === "scissors") {
        if (computerSelection === "Paper" || computerSelection === "paper"){
            return "You won this round, scissors beat paper."
        } else if (computerSelection === "Scissors" || computerSelection === "scissors") {
            return"It's a Tie, both picked scissors.";
        } else if (computerSelection === "Rock" || computerSelection === "rock") {
            return "You lost this round, rock beats scissors";
        }
    } else {
        return "there is an error in the playRound function";
    }
    }
const playerSelection = userChoice;
const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    // create a function of the actually game to run 5 times and state the result of the game...
    for (i=1; i <= 5; i++) {
    console.log(i);
    }



    
    function playingRound() {
        for (let i=0; i<5; i++) {
            let computerSelection = computerPlay();
            let playerSelection = prompt("Rock, Paper, or Scissors", "");
            console.log($(results(playerSelection.toLowerCase(),computerSelection)));
        }
        if (userScore > compScore) {
            return "You won!"
        } else if (userScore < compScore) {
            return "You lost."
        } else if (userScore === compScore) {
            return "It's a tie, lets play again!"
        }
    }



//This is another example how to display the game, but with this you wont be able to create animations

const resultDisplay = document.querySelector("#result")
const choicesDisplay = document.querySelector("#choices")
const choices = ['rock','paper','scissors']

const handleClick = (e) => {
    const userChoice = e.target.innerHTML
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice,computerChoice)
}
choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice,computerChoice) => {
    switch(userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ',' + ' You win!';
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ',' + ' You lose.';
            break
        case 'paperpaper':
        case 'scissorscissors':
        case 'rockrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ',' + " It's a tie.";
            break       
    }
}
let randomNo = parseInt(Math.random()*100+1);
// parseint cuz don't want decimal values

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessFeild')
const guessSlot = document.querySelector('#prevgues')
const guessRemaining = document.querySelector('#guessRemaining');
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0;

let playGame = true;
if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess)
        validateGuess(guess);
        
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number")
    }else if(guess < 1){
        alert("Please Enter a Number more than 1")
    }else if(guess > 100){
        alert("Please Enter a Number less than 100")
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuessRemain(guess)
            displayMessage(`Game Over. Random number was ${randomNo}`);
            endGame();
        }
        else{
            displayGuessRemain(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNo){
        displayMessage(`You Guessed it Right!`)
        endGame();
    }
    else if(guess < randomNo){
        displayMessage(`Number is Too Low!`)
    }
    else if(guess > randomNo){
        displayMessage(`Number is Too High!`)
    }
}

function displayGuessRemain(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess ++;
    guessRemaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (e) => {
        userInput.value = '';
        randomNo = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML='';
        guessRemaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled');
        StartOver.removeChild(p)
        playGame = true;
    })
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disable', '');
    p.classList.add('button')
    p.innerHTML('<h2 id="newGame">Start New Game</h2>')
    StartOver.appendChild(p)
    playGame = false;
    newGame()
}



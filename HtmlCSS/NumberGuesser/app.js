//Game Values

let min = 1,
    max = 10,
    winningNum = getRandomNumber(),
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

guessBtn.addEventListener('click', (e) => {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green'
        // setMessage(`${winningNum} is correct! YOU WIN!!!`, 'green')

        gameOver(true, `${winningNum} is correct! YOU WIN!!!`)
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`GAME OVER. YOU LOST!!!. The Correct Number Was ${winningNum}`);
            gameOver(false, `GAME OVER. YOU LOST!!!. The Correct Number Was ${winningNum}`)
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
        }
    }
})

function gameOver(won, msg) {
    let color;

    won === true ? color : 'green' ? color : 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg, color);
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again"
}

function setMessage(mesg, color) {
    message.style.color = color;
    message.textContent = mesg;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

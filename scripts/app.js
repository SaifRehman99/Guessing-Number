// Game Values
let min = 1,
    max = 10,
    correctGuess = 3,
    guessLeft = 3;

// getting references here
const game = document.querySelector('#guessGame'),
    minValue = document.querySelector('.min-num'),
    maxValue = document.querySelector('.max-num'),
    inputValue = document.querySelector('#inputNumber'),
    submitValue = document.querySelector('#submitValue');
    msg = document.querySelector('#message');


// setting values for the min and max
minValue.textContent = min;
maxValue.textContent = max;


// adding event delegation here

// listening for the button for the input value
submitValue.addEventListener('click', () => {

    // getting the input value
    const value = parseInt(inputValue.value);

    // validating value here
    if (isNaN(value) || value < min || value > max) {
        setMessage(`Please Enter Between ${min} - ${max}`, `red`);
    }

    // wining the game
    if (value === correctGuess) {

        gameResult(true,`YOU WIN! ${value} is the correct guess!`);
    }
    else{
        guessLeft--;

        if(guessLeft ===0){
            gameResult(false,`You Lose! ${correctGuess} was the answer!`);
            submitValue.disabled = true;
        }
        else{

            // changing the border color
            inputValue.style.borderColor = 'red';

            // setting the text color here
            msg.style.color = 'red';

            // clearing the input value
            inputValue.value = '';

            // setting the message here
            setMessage(`Wrong! ${guessLeft} guesses left! `);
        }

    }
})

// setting text for the message div
let setMessage = (text, clr) => {
    msg.textContent = text;
    msg.style.color = clr;
}

// showing msg related to game
const gameResult = (won,text) => {
    won===true ? clr = 'green' : clr = 'red';


    // disabling the input
    inputValue.disabled = true;

    // changing the input color
    inputValue.style.borderColor = clr

    // changing the text color
    msg.style.color = clr

    // setting the msg here
    setMessage(text);

    // setting for the play again scenario
    submitValue.value = 'Play Again';
    submitValue.className += 'againPlay'  

}
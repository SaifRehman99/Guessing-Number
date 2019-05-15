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

// listening for the button for the input value
submitValue.addEventListener('click',()=>{
    
    // input value
    const value = parseInt(inputValue.value);
    
    // validating value here
    if(isNaN(value) || value<min || value > max){
        setMessage(`Please Enter Between ${min} - ${max}`,`red`);
    }
})

// setting text for the message div

//Name of player
let name = prompt('Please input a name.')
// previous players
let record = {}
// Generates a random number between 1 and 100
let secret = 10 //Math.floor(Math.random() * 100) + 1;
userGuess()
    
function userGuess() {
    // variable that will evaluate to the user's guess
    let guess = parseInt(prompt('Please guess a number between 1 and 100.'));
    let guessHistory = [guess]; // Keep track of the user's previous guesses
// Function that checks to see if guess is equal to secret number
    function check(num) {
        if (guess < secret) {
            return 'Sorry ' + name + ', Guess Higher';
        } else if (guess > secret) {
            return 'Sorry ' + name + ', Guess Lower';
        } else { 
            return 'Please input a number.'   
        }
    }  
// Create the variable called tries to store the number the of tries
    let tries = 1;

// Loop until the user guesses the correct number
while (guess !== secret) {
    // Call the check function to see if the guess is correct
    let result = check(guess);
    // Display whether the guess is too high or too low
    alert(result);

    // Prompt the user to guess again
    guess = parseInt(prompt('Try again.'));

    // Add the guess to the history
    guessHistory.push(guess);

    // Increment the number of tries
    tries++;
}

if (guess === secret) {
    // setting a key of players name equal to their score
    if (record.name === undefined) {
        record.name = tries
        if(tries === 1) {
            alert('That\'s correct ' + name + '! It took you 1 try. Your guess history was ' + guessHistory.join(', ') + '.' )
        } else {
            alert('That\'s correct ' + name + '! It took you ' + tries + ' tries. Your guess history was ' + guessHistory.join(', ') + '.' )
        }
    } else if (record.name > tries) {
        alert('That\'s correct ' + name + '! You beat your previous attempt by ' + (record.name - tries) + ' fewer guesses. Your guess history was ' + guessHistory.join(', ') + '.')
        record.name = tries;    
    } else {
        alert('That\'s correct ' + name + '! You did better in your last game by ' + (tries - record.name) + ' fewer guesses. Your guess history was ' + guessHistory.join(', ') + '.')
        record.name = tries;
    }

    
    }
    // Display the history of guesses and number of tries
    let tryAgain = prompt('Play Again? Yes/No').toLowerCase()

if (tryAgain === 'yes' || tryAgain === 'y') {
    userGuess()
} else {
    alert('Thanks for playing.') 
}
}
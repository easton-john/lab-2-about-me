'use strict';

// function asking users 5 questions and notifying if they were correct or wrong. It also notifies them of their score.
function fiveQuestions() {
    alert('Welcome to 5 Questions! Reply True or False to the following statements.');
    var score = 0;
    
    var favoriteColor = prompt('My favorite color is red');
   
    // while loops makes sure user enters a valid response (t, true, f or false) and then notifies them if they were correct or wrong.
    while(true) {
        if(!favoriteColor) {
            favoriteColor = prompt('Please type True or False');
        }
        
        else if(favoriteColor.toLowerCase() === 't' || favoriteColor.toLowerCase() === 'true') {
            alert('WRONG!');
            break;
        }
        
        else if(favoriteColor.toLowerCase() === 'f' || favoriteColor.toLowerCase() === 'false') {
           alert('CORRECT!');
           score++;
           break;
        }

        else {
            favoriteColor = prompt('Please type True or False');
        }
    }
    console.log('user guessed:', favoriteColor);

    var tattoos = prompt('I have tattoos');
    while(true) {
        if(!tattoos) {
            tattoos = prompt('Please type True or False');
        }

        else if(tattoos.toLowerCase() === 't' || tattoos.toLowerCase() === 'true') {
            alert('CORRECT!');
            score++;
            break;
        }
        
        else if(tattoos.toLowerCase() === 'f' || tattoos.toLowerCase() === 'false') {
           alert('WRONG!');
           break;
        }

        else {
            tattoos = prompt('Please type True or False');
        }
    }
    console.log('user guessed:', tattoos);

    var thailandDrunk = prompt('I have been drunk in Thailand');
    while(true) {
        if(!thailandDrunk) {
            thailandDrunk = prompt('Please type True or False');
        }

        else if(thailandDrunk.toLowerCase() === 't' || thailandDrunk.toLowerCase() === 'true') {
            alert('CORRECT!');
            score++;
            break;
        }
        
        else if(thailandDrunk.toLowerCase() === 'f' || thailandDrunk.toLowerCase() === 'false') {
           alert('WRONG!');
           break;
        }

        else {
            thailandDrunk = prompt('Please type True or False');
        }
    }
    console.log('user guessed:', thailandDrunk);

    var petLion = prompt('I have pet a lion');
    while(true) {
        if(!petLion) {
            petLion = prompt('Please type True or False');
        }   
        
        else if(petLion.toLowerCase() === 't' || petLion.toLowerCase() === 'true') {
            alert('WRONG!');
            break;
        }
        else if(petLion.toLowerCase() === 'f' || petLion.toLowerCase() === 'false') {
           alert('CORRECT!');
           score++;
           break;
        }

        else {
            petLion = prompt('Please type True or False');
        }
    }
    console.log('user guessed:', petLion);

    var brokenBone = prompt('I have broken a bone');
    while(true) {
        if(!brokenBone) {
            brokenBone = prompt('Please type True or False');
        }    
        else if(brokenBone.toLowerCase() === 't' || brokenBone.toLowerCase() === 'true') {
            alert('WRONG!');
            break;
        }
        else if(brokenBone.toLowerCase() === 'f' || brokenBone.toLowerCase() === 'false') {
           alert('CORRECT!');
           score++;
           break;
        }

        else {
            brokenBone = prompt('Please type True or False');
        }
    }
    console.log('user guessed:', brokenBone);
    
    // users total score
    console.log(score);

    // assigns element with id attribute 'firstGame' to variable and then inserts text content in element
    var gameMessage = document.getElementById('firstGame');
    gameMessage.textContent = 'Thanks for playing! You scored ' + score + ' out of 5.';
}

// function asking the user a question and allowing them 5 guesses to get it correct 
function guessingGame() {
    alert('Welcome to the Guessing Game! Good luck!')
    var guess;

    for(var i = 0; i < 5; i++) {
        var guessVar = ' guesses'
        var guess = prompt('What Island have I lived on? You have ' + (5 - i) + guessVar + ' left!');
        
        if(guess.toLowerCase() === 'oahu') {
            console.log(guess);
            alert('CORRECT! Great job!');
            break;
        }

        else if(guess.toLowerCase() === 'hawaii') {
            if(i === 4) {
                break;
            }

            else if(i === 3) {
                guessVar = ' guess'
            }
            
            alert('Which island in Hawaii?');   
        } 

        else {
            console.log(guess);
            alert('Incorrect!')
            if(i === 3) {
                guessVar = ' guess'
            }
        }
    }

    // assigns element with id attribute 'secondGame' to variable and then inserts text content in element
    var gameMessageTwo = document.getElementById('secondGame');
    gameMessageTwo.textContent = 'Thanks for playing! Come back soon.'
}

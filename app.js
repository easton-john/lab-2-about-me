function fiveQuestions() {
    alert('Welcome to 5 questions! Reply True or False to the following statements.');
    
    var favoriteColor = prompt('My favorite color is red');
    while(true) {
        if(favoriteColor.toLowerCase() === 't' || favoriteColor.toLowerCase() === 'true') {
            alert('WRONG!');
            break;
        }
        
        else if(favoriteColor.toLowerCase() === 'f' || favoriteColor.toLowerCase() === 'false') {
           alert('CORRECT!');
           break;
        }

        else {
            favoriteColor = prompt('Please type True or False');
        }
    }

    var tattoos = prompt('I have tattoos');
    while(true) {
        if(tattoos.toLowerCase() === 't' || tattoos.toLowerCase() === 'true') {
            alert('CORRECT!');
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

    var thailandDrunk = prompt('I have been drunk in Thailand');
    while(true) {
        if(thailandDrunk.toLowerCase() === 't' || thailandDrunk.toLowerCase() === 'true') {
            alert('CORRECT!');
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

    var petLion = prompt('I have pet a lion');
    while(true) {
        if(petLion.toLowerCase() === 't' || petLion.toLowerCase() === 'true') {
            alert('WRONG!');
            break;
        }
        else if(petLion.toLowerCase() === 'f' || petLion.toLowerCase() === 'false') {
           alert('CORRECT!');
           break;
        }

        else {
            petLion = prompt('Please type True or False');
        }
    }

    var brokenBone = prompt('I have broken a bone');
    while(true) {
        if(brokenBone.toLowerCase() === 't' || brokenBone.toLowerCase() === 'true') {
            alert('WRONG!');
            break;
        }
        else if(brokenBone.toLowerCase() === 'f' || brokenBone.toLowerCase() === 'false') {
           alert('CORRECT!');
           break;
        }

        else {
            brokenBone = prompt('Please type True or False');
        }
    }

}
    /* while(favoriteColor.toLowerCase() !== 't' || favoriteColor.toLowerCase() !== 'true') {
        alert('Please type either True or False');
        favoriteColor = prompt('My favorite color is red');
        console.log(favoriteColor);
    
        console.log('Favorite color red:', favoriteColor)
     */

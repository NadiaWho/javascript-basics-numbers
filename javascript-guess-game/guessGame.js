const numToGuess = prompt('Give me a number between 0 to 20')
    if (numToGuess <= 10) {
        alert('le chiffre est inférieur à celui à deviner')
    }
    else if (numToGuess > 11) {
        alert('le chiffre est supérieur à celui à deviner')
    }

    else  {
        alert('Bien joué ! C\'était bien le chiffre 11')
    }
    

const userAge = prompt('How old are you? ')
    if (userAge >= 18) 
        alert('Vous êtes majeur')
    else { 
        alert('Bonjour simple user')
    } 

const job = prompt('What\'s your job ?')
    if (job === "admin" || job === "administrateur" && userAge >= 18)
        alert('Bienvenue admin')
    else  {
        alert('Vous n\êtes pas l\'administateur')
    }  

const password = prompt('What\'s your password ?')
    if (password.length > 5 && job === "admin" || job === "administrateur")
        alert('Bienvenue master user')
    else {
        alert('You are not the master user')
    }
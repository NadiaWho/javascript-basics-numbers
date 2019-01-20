const age = prompt('Quel est votre âge ?')
    if (age <= 17) {
        alert('cela fera 15€')
    }
    else 
        alert('cela vous fera 30€')
        
const gender = prompt('êtes-vous un homme ou une femme ?')
    if (gender === "homme" && age >= 18) {
        alert('cela fera 35€')
    }
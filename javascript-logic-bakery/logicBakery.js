const flourPrice = 1
const sugarPrice = 1.5
const eggPrice = 3
const milkPrice = 2.5
const chocolatPrice = 10
const decorationPrice = 3.5
const fruitPrice = 5

const blackForestPrice = (flourPrice * 1) + (sugarPrice * 2) + (eggPrice * 2) + (milkPrice / 2) + (chocolatPrice * 2) + (decorationPrice * 5)
console.log(blackForestPrice)

const strawberryPiePrice = fruitPrice * 2 + flourPrice / 2 + sugarPrice + eggPrice / 2 + milkPrice / 2 + chocolatPrice / 2 + decorationPrice * 2
console.log(strawberryPiePrice)


const marginCoef = prompt('Quelle marge désirez-vous appliquer sur vos gâteaux?')
console.log('Prix coutant: ' +  blackForestPrice * ((marginCoef / 100) + 1) +'€ ,' + 
             'Prix vendu: ' + blackForestPrice + '€'
            )

const dailyCash = ( blackForestPrice * 6 + strawberryPiePrice * 6) * 5
console.log('trésorerie quotidienne à prévoir: ' + dailyCash + '€')

// const dailyRecipe = (dailyCash * ((marginCoef / 100) +1) ) 
// console.log('recette quotidienne: ' + dailyRecipe + '€')

const profit = dailyRecipe - dailyCash
console.log('le bénéfice sera de: ' + profit + '€ par jour')

// problème 
const isEven = () => {
    if (profit % 2 === 0)
        console.log('Bim...')
    else
        console.log('Bam...')
}
  
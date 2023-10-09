import Bankomat from './Bankomat.js'
import Card from './Card.js'

const bank = new Bankomat(false, false, 11000)
const card = new Card(15000, 1234)

console.log("Välkommen, sätt in ditt kort")
console.log("Mata in din pinkod")
bank.enterPin(1234)
console.log("Fel pinkod, försök igen")
console.log("Du matar in -car")
import Bankomat from './Bankomat.js'
import Card from './Card.js'

const bank = new Bankomat(false, false, 11000)
const card = new Card(15000, 1234)

console.log("Välkommen, sätt in ditt kort")
console.log("Mata in din pinkod")
bank.enterPin(7234)
console.log("Fel pinkod, försök igen")
bank.enterPin(1234)
console.log("Korrekt pinkod. Hur mycket vill du ta ut?")
bank.withdrawMoney(5000)
console.log("Välkommen, sätt in ditt kort")
console.log("Mata in din pinkod")
bank.enterPin(1234)
console.log("Korrekt pinkod. Hur mycket vill du ta ut?")
bank.withdrawMoney(7000)
bank.withdrawMoney(6000)
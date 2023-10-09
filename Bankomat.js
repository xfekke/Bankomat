import Card from './Card.js'

export default class Bankomat {
    cardInserted;
    validCard;
    machineBalance;

    constructor(cardInserted, validCard, machineBalance) {
        this.cardInserted = false;
        this.validCard = false;
        this.machineBalance = 11000;
    }

    insertCard() {
        this.cardInserted = true;
    }
    enterPin(cardPin) {
        if (cardPin == 1234) {
            this.validCard = true;
            console.log(this.validCard)
        } else {
            this.validCard = false;
            console.log(this.validCard)
        }

    }
    withdrawMoney(moneyAmount) {
        if (moneyAmount > this.machineBalance) {
            console.log(moneyAmount)
            console.log(`Det finns inte tillräckligt med pengar i bankomaten. Du kan ta ut upp till ${this.machineBalance}`)
            console.log(`Hur mycket vill du ta ut?`)

        } else {
            this.machineBalance -= moneyAmount
            console.log(moneyAmount)
            console.log(`Här har du dina ${moneyAmount}kr. Glöm inte ditt kort! Tack för att du använder bankomaten!`)
        }
        


    }

}


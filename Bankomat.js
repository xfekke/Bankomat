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
        } else {
            this.validCard = false;
        }

    }
    withdrawMoney() {

    }
    getBalance() {

    }
}


class Bankomat {
        constructor(){
            this.cardInserted = false;
            this.validCard = false;
            this.machineBalance = 11000;
        }

        insertCard(Card) {
            if (!this.cardInserted) {
                this.cardInserted = true;
                console.log("Vänligen sätt in ditt kort")
            } else {
                console.log("Det finns redan ett kort i bankomaten")
            }
            
        }
}

export class Bankomat{};
class Vacationer {
    constructor(fullName, creditCard){
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: '',
            securityNumber: 111
        };
        if(creditCard !== undefined){
            this.addCreditCardInfo(creditCard);
        }
        this.wishList = [];
    }


    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        let regex = /\b([A-Z][a-z]+)\b/;

        if(value.length !== 3){
            throw new Error('Name must include first name, middle name and last name');
        }

        for (let v of value) {
            if(!regex.exec(v)){
                throw new Error('Invalid full name');
            }
        }

        let fullName = {};
        fullName.firstName = value[0];
        fullName.middleName = value[1];
        fullName.lastName = value[2];

        this._fullName = fullName;
    }

    generateIDNumber(){
        let numToAdd = 0;
        let str = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
        if(this.fullName.lastName.endsWith('a') || this.fullName.lastName.endsWith('e') || this.fullName.lastName.endsWith('o') || this.fullName.lastName.endsWith('i') || this.fullName.lastName.endsWith('u')){
            numToAdd = 8;
        } else {
            numToAdd = 7;
        }

        return str.toString() + numToAdd;
    }

    addDestinationToWishList(destination){

        if(!this.wishList.includes(destination)) {
            this.wishList.push(destination);
        } else {
            throw new Error('Destination already exists in wishlist')
        }

        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo(){

        let wishList = '';
        if(this.wishList.length === 0){
            wishList = 'empty';
        } else {
            wishList = this.wishList.join(', ');
        }
        let str = `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`+
            `ID Number: ${this.idNumber}\n`+
            `Wishlist:\n`+
            `${wishList}\n`+
            `Credit Card:\n`+
            `Card Number: ${this.creditCard.cardNumber}\n`+
            `Expiration Date: ${this.creditCard.expirationDate}\n`+
            `Security Number: ${this.creditCard.securityNumber}`;

        return str;
    }

    addCreditCardInfo(input){
        if(input.length !== 3){
            throw new Error('Missing credit card information');
        } else if(typeof input[0] !== 'number' || typeof input[2] !== 'number'){
            throw  new Error('Invalid credit card details')
        }

        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = input[2];
    }
}

let a = new Vacationer(["Vania", "Ivanova", "Zhivk0va"]);
console.log(a);
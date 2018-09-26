class Stringer{

    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(numToIncreaseWith){
        this.innerLength += numToIncreaseWith;
    }

    decrease(numToDecreaseWith){
        if(this.innerLength - numToDecreaseWith >= 0) {
            this.innerLength -= numToDecreaseWith;
        } else {
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.innerString.length > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + '...';
        } else if(this.innerLength === 0){
            return '...';
        }
    }

}

let test = new Stringer("Test", 5);
console.log(test.decrease(5)); //Test

class SortedList {
    constructor(){
        this.numbers = [];
        this.size = 0;
    }

    add(element){
        this.numbers.push(element);
        this.size++;
        this.numbers.sort((a, b) => a - b);
    }

    remove(index){
        if(index >= 0 && index < this.numbers.length){
            this.numbers.splice(index, 1);
            this.size--;
        }
        this.numbers.sort((a, b) => a - b);
    }

    get(index){
        if(index >= 0 && index <= this.numbers.length){
           return this.numbers[index];
        }
    }

}
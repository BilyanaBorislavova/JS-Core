class Rat{

    constructor(name){
        this.name = name;
        this.rats = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat === true) {
            this.rats.push(otherRat);
        }
    }

    getRats(){
        return this.rats;
    }

    toString(){
        return `${this.name}`;
        for (let obj of this.rats) {
            return `##${this.name}`
        }
    }

}
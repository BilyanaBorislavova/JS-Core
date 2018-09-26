class Player{

    constructor(nickname){
        this.nickname = nickname;
        this.scores = [];
    }

    addScore(score){
        if(!isNaN(score)){
            if(typeof score === 'number') {
                this.scores.push(score)
            }
        }
        return this
    }

    get scoreCount(){
        return this.scores.length;
    }

    get highestScore(){
        let sorted = this.scores.sort((a, b) => b - a);
        return sorted[0];
    }

    get topFiveScore(){
        let sorted = this.scores.sort((a, b) => b - a);
        return sorted.slice(0, 5);
    }

    toString(){
        if(this.scores.length === 0){
            return `${this.nickname}: [${this.scores}]`
        } else {
            let sorted = this.scores.sort((a, b) => b - a);
            return `${this.nickname}: [${sorted}]`
        }
    }
}
let peter = new Player("Peter"); console.log('Highest score: ' + peter.highestScore); console.log(`Top 5 score: [${peter.topFiveScore}]`); console.log('' + peter); console.log('Score count: ' + peter.scoreCount);

peter.addScore(450); peter.addScore(200); console.log('Highest score: ' + peter.highestScore); console.log(`Top 5 score: [${peter.topFiveScore}]`); console.log('' + peter);

peter.addScore(2000); peter.addScore(300); peter.addScore(50); peter.addScore(700); peter.addScore(700);


console.log('Highest score: ' + peter.highestScore); console.log(`Top 5 score: [${peter.topFiveScore}]`); console.log('' + peter); console.log('Score count: ' + peter.scoreCount);

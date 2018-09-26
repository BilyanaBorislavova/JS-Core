class TrainingCourse{
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.courses = [];
    }

    addTopic(title, date){
            this.courses.push({title, date});
            this.courses = this.courses.sort((a, b) => a.date - b.date)
    }

    get firstTopic(){
        if(this.courses.length > 0) {
            return this.courses[0];
        }
    }

    get lastTopic() {
        return this.courses[this.courses.length - 1]
    }

    toString(){
          let result = '';
            result += `Course ${this.title} by ${this.trainer}\n`;
            for (let obj of this.courses) {
                result += ` * ${obj.title} - ${obj.date}\n`
            }
            return result;
    }
}

console.log(new Date(2017, 10, 12, 18, 0));
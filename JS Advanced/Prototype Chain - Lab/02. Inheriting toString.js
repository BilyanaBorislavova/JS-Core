function toStringExtension() {

    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString(){
            let parentStr = super.toString().slice(0, -1);
            return `${parentStr}, course: ${this.course})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            let parentStr = super.toString().slice(0, -1);
            return `${parentStr}, subject: ${this.subject})`
        }
    }

    return {Person, Teacher, Student}
}
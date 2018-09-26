class MailBox{

    constructor(){
        this.messages = [];
    }

    addMessage(subject, text){
        if(typeof subject === 'string' && typeof text === 'string'){
            this.messages.push({subject, text});
        }
        return this
    }

    get messageCount(){
        return this.messages.length;
    }

    deleteAllMessages(){
        return this.messages = [];
    }

    findBySubject(substr){
        let arr = [];

        for (let obj of this.messages) {
            if(obj.subject.indexOf(substr) > -1){
                arr.push(obj);
            }
        }

        return arr;
    }

    toString(){
        if(this.messages.length === 0){
            return ` * (empty mailbox)`;
        } else {
            let result = '';
            for (let obj of this.messages) {
                result += ` * [${obj.subject}] ${obj.text}\n`
            }
            return result
        }
    }
}

let mb2string = new MailBox()
    .addMessage("Subj 1", "Msg 1")
   .addMessage("Subj 2", "Msg 2")
   .addMessage("Subj 3", "Msg 3")
   .toString();

console.log(mb2string);

function captureNumbers(input) {

    let regex = /[0-9]+/g;
    let match;
    let result = [];

    for (let sentence of input) {

        while(match = regex.exec(sentence)){
           result.push(match[0]);
        }
    }
    console.log(result.join(' '));
}

captureNumbers(['What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'])
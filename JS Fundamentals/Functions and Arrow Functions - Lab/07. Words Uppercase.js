function wordsUppercase(input) {

    let regExp = /(\w+)/g;
    let str = input.match(regExp);
    let output = "";


    for (let obj of str) {
        let upper = obj.toUpperCase();
        output += upper + ", ";
    }

    output = output.substring(0, output.length - 2);
    console.log(output);
}

wordsUppercase('Hi, how are you?');
function concatNumbers(number) {

    let parsedNumber = parseInt(number);
    let str = "";
    for (var i = 1; i <= parsedNumber; i++) {
        str += i;
    }

    console.log(str);
}

concatNumbers("11");
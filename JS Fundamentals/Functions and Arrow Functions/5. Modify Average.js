function averageOfFive(number) {

    let output = [];
    let stringNumber = number.toString();

    let sum = 0;

    for (let i = 0, len = stringNumber.length; i < len; i += 1) {
        output.push(stringNumber.charAt(i));
    }

    for (let i = 0; i < output.length; i++) {

        let digit = parseInt(output[i]);
        sum += digit;
    }

    let average = sum / output.length;


    let count = 0;

    while (average <= 5){
        count++;
        sum += 9;
        average = sum / (output.length + count);
    }

    console.log(number + "9".repeat(count));

}

averageOfFive(5835)
function negativePositiveNumbers(arr) {

    let modify = [];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] < 0){
            modify.unshift(arr[i]);
        } else {
            modify.push(arr[i]);
        }
    }

    for (let number of modify) {
        console.log(number);
    }
}

negativePositiveNumbers([7, -2, 8, 9])
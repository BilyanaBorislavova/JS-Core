function oddNumbers(arr) {

    let oddNumbers = [];

    for (let i = 0; i < arr.length; i++) {

        if(i % 2 !== 0){
            oddNumbers.unshift(arr[i] * 2);
        }
    }

    console.log(oddNumbers.join(' '));
}

oddNumbers([10, 15, 20, 25])
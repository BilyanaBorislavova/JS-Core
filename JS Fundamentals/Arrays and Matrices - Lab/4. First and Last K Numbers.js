function firstAndLastKNumbers(arr) {

    let k = arr[0];
    let firstArr = arr.slice(1, k + 1);
    let secondArr = arr.slice(arr.length - k, k + 2);
    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));


}

firstAndLastKNumbers([3,
    6, 7, 8, 9]

);
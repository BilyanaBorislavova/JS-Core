function lastKNumbersSequence(n, k) {

    let arr = [];
    arr[0] = 1;

    for (let i = 1; i < n; i++) {

        let start = Math.max(0, i - k);
        let sum = arr.slice(start, i).reduce((a, b) => a + b);
        arr.push(sum);
    }

    console.log(arr.join(' '));
}

lastKNumbersSequence(6,3)
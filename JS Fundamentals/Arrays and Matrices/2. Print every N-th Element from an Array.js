function printEveryNthElement(arr) {

    let step = Number(arr.pop());

    console.log(arr.filter((num, i) => i % step === 0).join('\n'));
}

printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);
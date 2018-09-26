function printArrayWithGivenDelimeter(arr) {

    let delimeter = arr[arr.length - 1];

    console.log(arr.splice(0, arr.length - 1).join(delimeter));
}

printArrayWithGivenDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'
]);
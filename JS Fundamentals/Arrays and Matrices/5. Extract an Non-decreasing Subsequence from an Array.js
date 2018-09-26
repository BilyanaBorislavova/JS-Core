function extractDecreasingNumber(arr) {

    let modifiedArr = [arr[0]];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i + 1] >= arr[i] && arr[i + 1] >= arr[0]){
            modifiedArr.push(arr[i + 1]);
        }
    }

    console.log(modifiedArr.join('\n'));
}

extractDecreasingNumber([20,
        3,
        2,
        15,
        6,
        1
    ]
)
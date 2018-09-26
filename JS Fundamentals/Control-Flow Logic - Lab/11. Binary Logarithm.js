function binary(arr) {

    for (var i = 0; i < arr.length; i++) {
        console.log(Math.log2(arr[i]));

    }
}

binary([1024,
    1048576,
    256,
    1,
    2,
    50,
    100]);
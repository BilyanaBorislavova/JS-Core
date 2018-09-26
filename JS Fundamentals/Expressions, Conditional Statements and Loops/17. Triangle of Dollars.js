function printTriangleOfDollars(size) {

    let dollar = "$";

    for (let i = 0; i < size; i++) {

        console.log(dollar);
        dollar += "$";
    }
}

printTriangleOfDollars(3)
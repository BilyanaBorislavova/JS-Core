function dna(number) {

    let arr = ["**AT**","*C--G*", "T---T", "*A--G*", "**GG**", "", "A", "G", "G", "G"];
    let currArr = [];

    for (let i = number; i >= 0; i--) {
        currArr.unshift(arr[i]);
    }

    let result = "";

    for (let i = 0; i < currArr.length - 1; i++) {

    }
    console.log(result);

}

//dna(4)
dna(10)
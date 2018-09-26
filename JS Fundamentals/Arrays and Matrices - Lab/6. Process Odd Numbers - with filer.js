function oddNumbers(arr) {

    let modify = arr.filter((num, i) => i % 2 !== 0).map(num => num * 2).reverse();
    console.log(modify);

   // console.log(arr.filter((num, i) => i % 2 !== 0 ).map(num => num * 2).reverse());
}

oddNumbers([10, 15, 20, 25])
function matchMultiplication(input) {

    let regex = /(\-?[0-9]+)\s*\*\s*(\-?[0-9]+(\.[0-9]+)?)/g;
    input = input.replace(regex, (match, n1, n2) => Number(n1) * Number(n2));
    console.log(input);

}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')
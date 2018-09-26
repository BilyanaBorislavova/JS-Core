function sumAndVAT(info) {
    let sum = 0;
    for (var i = 0; i < info.length; i++) {
        sum += info[i];
    }

    let VAT = sum * 0.2;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${VAT}`)
    console.log(`total = ${sum + VAT}`)
}

sumAndVAT([1.20, 2.60, 3.50]);
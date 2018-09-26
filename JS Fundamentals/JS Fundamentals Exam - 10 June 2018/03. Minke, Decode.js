function regex(arr) {
    let startPoint = Number(arr.shift());
    let endPoint = Number(arr.shift());
    let rightWord = arr.shift();

    let countryRegex = /\b[A-Z][^\s]+[A-Z]\b/g;
    let numberRegex = /([0-9]{3}(\.[0-9]+)?)/g;

    for (let obj of arr) {
        let match = countryRegex.exec(obj);

        let country = match[0];
        let replace = country.substring(startPoint, endPoint + 1);
        let newC = country.replace(replace, rightWord);

        let numberMatch;
        let town = "";
        while (numberMatch = numberRegex.exec(obj)){
            let num = numberMatch[0];
            if(num.includes('.')){
                num = Number(Math.ceil(numberMatch[0]));
            } else {
                num = Number(numberMatch[0])
            }
            town += String.fromCharCode(num);
        }
        newC = newC.replace(newC[newC.length - 1], newC[newC.length - 1].toLowerCase());
        town = town.replace(town[0], town[0].toUpperCase());

        console.log(`${newC} => ${town}`);
    }

}

regex(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"])
regex(["1", "4","loveni", "SerbiA VawnA BulgariA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])
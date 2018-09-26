function queryMess(arr) {

    let keyRegex = /([^=&?\s]+)\s*=\s*([^=&?]+)/g;

    let matchKey;

    let result = "";
    for (let sentence of arr) {
        let map = new Map();

        sentence = sentence.replace(/(\+|\?|%20)+/g, ' ').trim();

        while (matchKey = keyRegex.exec(sentence)){
            if(!map.has(matchKey[1].trim())) {
                map.set(matchKey[1].trim(), []);
            }
            map.get(matchKey[1].trim()).push(matchKey[2].trim())
        }

        for (let [a,b] of map) {
            result += (`${a}=[${b.join(', ')}]`);
        }
        result += '\n'
    }

   console.log(result);
}

queryMess(['&evil=sauron&answer%20of%20everything++++=42',
    ])

//queryMess(['login=student&password=student'])
function dna(input) {

    let validInput = /^([a-z!@#$?]+)=([0-9]+)--([0-9]+)<<([a-zA-Z]+)$/;
    let validArr = [];

    let firstPartRgx = /([a-z!@#$?]+)=([0-9]+)/g;
    let match;

    for (let i = 0; i < input.length; i++) {

        if(input[i] === 'Stop!'){
            break;
        }

        if(validInput.exec(input[i])){
            while(match = firstPartRgx.exec(input[i])) {

                let name = match[1];
                let length = match[2];

                let matches = name.match(/[a-z]/g);

                if(matches.length == length){
                    validArr.push(input[i]);
                }
            }
        }
    }

    let rgx = /([0-9]+)<<([a-zA-Z]+)/g;
    let matchKey;
    let map = new Map();

    for (let obj of validArr) {
        while (matchKey = rgx.exec(obj)){
            let genes = Number(matchKey[1]);
            let organism = matchKey[2];

            if(!map.has(organism)){
                map.set(organism, genes)
            } else {
                map.set(organism, map.get(organism) +genes);
            }
        }
    }

    let sortedMap = [...map].sort((a, b) => b[1] - a[1]);

    for (let obj of sortedMap) {
        console.log(`${obj[0]} has genome size of ${obj[1]}`);
    }

}


dna([
'bx!=4--421<<bison',
'Stop!'

]
);
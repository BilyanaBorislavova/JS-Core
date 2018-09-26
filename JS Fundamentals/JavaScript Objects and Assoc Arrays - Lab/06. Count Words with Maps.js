function countWords(input) {

    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let split = input[i].toLowerCase().split(/[^A-Za-z0-9_]+/g).filter(a => a !== '').sort(function (a,b) {
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        });

        for (let word of split) {
            if(!map.has(word)){
                map.set(word, 1);
            } else {
                map.set(word, map.get(word) +1)
            }
        }
    }


    for (let [k,v] of map) {
        console.log(`'${k}' -> ${v} times`);
    }

}

countWords(["Far too slow, you're far too slow."])
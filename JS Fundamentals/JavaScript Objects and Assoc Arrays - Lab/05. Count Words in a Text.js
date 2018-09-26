function countWords(input) {

    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let split = input[i].split(/[^A-Za-z0-9_]+/g).filter(a => a !== '');

        for (let obj of split) {
            if(!map.has(obj)){
                map[obj] = 1;
            } else {
                map[obj]++;
            }
        }
    }
    console.log(JSON.stringify(map));

}

countWords(["Far too slow, you're far too slow."])
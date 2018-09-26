function argumentInfo() {
    let map = new Map();

    for (let args of arguments) {
        let type = typeof args;
        let element = args;

        if(!map.has(type)){
            map.set(type, 1);
        } else {
            map.set(type, map.get(type) +1);
        }

        console.log(`${type}: ${element}`);
    }

    [...map].sort((a, b) => b[1] - a[1]).forEach(a => console.log(`${a[0]} = ${a[1]}`))

}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
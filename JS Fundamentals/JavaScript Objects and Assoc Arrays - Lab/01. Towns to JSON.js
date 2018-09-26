function townsToJSON(input) {

    let arr = [];

    for (let i = 1; i < input.length; i++) {
        let split = input[i].split(/\s*\|\s*/).filter(a => a !== '');

        let obj = {"Town":split[0], "Latitude":Number(split[1]), "Longitude":Number(split[2])};
        arr.push(obj);
    }

    console.log(JSON.stringify(arr));


}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)
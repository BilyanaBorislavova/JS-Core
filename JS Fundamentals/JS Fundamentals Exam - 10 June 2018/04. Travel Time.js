function aaa(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [country, town, cost] = arr[i].split(' > ').filter(a => a !== '');
        cost = Number(cost);
        town = town.replace(town[0], town[0].toUpperCase());

        if(!map.has(country)){
            map.set(country, new Map());
        }

        if(!map.get(country).has(town)) {
            map.get(country).set(town, cost);
        } else {

            let previousCost = map.get(country).get(town);

            if (previousCost > cost) {
                map.get(country).set(town, cost);
            }
        }

    }

    let sortedMap = [...map].sort((a, b) => a[0].localeCompare(b[0]));

    let result = "";
    for (let [k, values] of sortedMap) {

        result += `${k} -> `
        let sorted = ([...values].sort((a, b) => [...a][1] - [...b][1]));

        for (let [a,b] of sorted) {
            //result += `${a[0].to}`
            result += `${a} -> ${b} `
        }
        result += `\n`;
    }

    console.log(result);
}

aaa(["Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
)
function cityMarkets(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [town, product, amount, price] = arr[i].split(/[->: ]+ /).filter(a => a !== ' ');

        if(!map.has(town)){
            map.set(town, new Map());
            map.get(town).set(product, amount * price);
        } else {
            if(!map.get(town).has(product)){
                map.get(town).set(product, amount * price);
            } else {
                map.get(town).set(product, map.get(product), +(amount * price));
            }
        }

    }

    for (let [towns ,products] of map) {
        console.log(`Town - ${towns}`);

        for (let [product, income] of products) {
            console.log(`$$$${product} : ${income}`)
        }
    }

}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
])
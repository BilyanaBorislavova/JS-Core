function lowCityPrices(arr) {

    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let [town, product, price] = arr[i].split(' | ').filter(a => a !== '');

        if(!map.has(town)){
            map.set(town, new Map());
        }
        map.get(town).set(product, price);

    }

    for (let [towns ,products] of map) {
        let minPrice = Number.POSITIVE_INFINITY;
        let currTown = "";
        let prd = "";
        for (let [product, income] of products) {

            if(income < minPrice){
                minPrice = income;
                prd = product;
            }
        }
        console.log(`${towns} -> ${minPrice} (${currTown})`)

    }
}

lowCityPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
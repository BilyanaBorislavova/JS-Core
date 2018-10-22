function coffee(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split(", ").filter(a => a !== '');
        let command = split[0];

        if(split.length === 5){
            let coffeeBrand = split[1];
            let nameOfCoffee = split[2];
            let expireDate = split[3];
            let quantity = +split[4];

            if(command === "IN"){
                if(!map.has(coffeeBrand)){
                    map.set(coffeeBrand, new Map())
                }

                if(!map.get(coffeeBrand).has(nameOfCoffee)){
                    map.get(coffeeBrand).set(nameOfCoffee, {expireDate, quantity});
                } else if (map.get(coffeeBrand).get(nameOfCoffee).expireDate < expireDate){
                    map.get(coffeeBrand).set(nameOfCoffee, {expireDate, quantity})
                } else if (map.get(coffeeBrand).get(nameOfCoffee).expireDate === expireDate){
                    let currentCoffee = Number(map.get(coffeeBrand).get(nameOfCoffee).quantity);
                    currentCoffee += quantity;
                    map.get(coffeeBrand).set(nameOfCoffee, {expireDate, currentCoffee})
                }
            } else if(command === "OUT"){
                if(map.has(coffeeBrand)){
                    if(map.get(coffeeBrand).has(nameOfCoffee)){
                        if(map.get(coffeeBrand).get(nameOfCoffee).expireDate > expireDate && map.get(coffeeBrand).get(nameOfCoffee).quantity >= quantity){
                            map.get(coffeeBrand).get(nameOfCoffee).quantity -= quantity;
                        }
                    }
                }
            }
        }


        if(command === "REPORT"){
            console.log(`>>>>> REPORT! <<<<<`);
            for (let [brand, coffee] of map) {
                console.log(`Brand: ${brand}:`);
                for (let [c, values] of coffee) {
                    console.log(`-> ${c} -> ${values.expireDate} -> ${values.quantity}.`);
                }
            }
        }

        if(command === "INSPECTION"){
            console.log(`>>>>> INSPECTION! <<<<<`);
            for (let [brand, coffee] of [...map].sort((a, b) => a[0].localeCompare(b[0]))) {
                console.log(`Brand: ${brand}:`);
                let sortedCoffees = [...coffee].sort((a, b) => b[1].quantity - a[1].quantity);
                for (let [c, values] of sortedCoffees) {
                    console.log(`-> ${c} -> ${values.expireDate} -> ${values.quantity}.`);
                }
            }
        }
    }


}

coffee([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
);
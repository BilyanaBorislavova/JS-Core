function autoEngineeringCompany(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [carBrand, carModel, producedCars] = arr[i].split(/\s*\|\s*/).filter(a => a !== '');

        producedCars = Number(producedCars);

        if (!map.has(carBrand)) {
            map.set(carBrand, new Map());
           // map.get(carBrand).set(carModel, producedCars);
        }
        if (!map.get(carBrand).has(carModel)) {
            map.get(carBrand).set(carModel, producedCars);
        } else {
            map.get(carBrand).set(carModel, map.get(carBrand).get(carModel) +producedCars);
        }

    }


    for (let [car, values] of map) {
        console.log(car);

        for (let [model, production] of values) {
            console.log(`###${model} -> ${production}`);
        }
    }

}

autoEngineeringCompany(['Audi | Q6 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])
function cappyJuice(arr) {

    let testMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [juice, quantity] = arr[i].split(' => ').filter(a => a !== '');
        quantity = Number(quantity);


        if(!testMap.has(juice)){

        }

    }

    console.log(map);
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Peach => 450',
    'Peach => 600',
    'Strawberry => 549',
])
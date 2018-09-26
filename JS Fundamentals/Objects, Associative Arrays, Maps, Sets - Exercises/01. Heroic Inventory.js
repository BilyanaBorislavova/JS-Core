function heriocInventory(arr) {

    let array = [];

    for (let i = 0; i < arr.length; i++) {
        let split = (arr[i].split(/[\s\/,]+/).filter(a => a !== ''));

        let obj = {name:split[0], level:Number(split[1]), items:[]};

        for (let j = 2; j < split.length; j++) {
            obj['items'].push(split[j]);
        }

        array.push(obj);
    }

    console.log(JSON.stringify(array));

}

heriocInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
])
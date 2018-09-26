function polulation(arr) {

    let obj = new Map();

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split(' <-> ').filter(a => a !== '');

        if(obj.has(split[0])){
            obj.set(split[0], obj.get(split[0]) + Number(split[1]))
        } else {
            obj.set(split[0], Number(split[1]));
        }
    }

    for (let [town, sum] of obj) {
        console.log(town +" " + ":" + " " + sum);
    }

}

polulation(['Sofia <-> 5',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Sofia <-> 5'
])
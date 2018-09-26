function sumByTown(input) {
    let obj = {};
    let town;
    let income;

    for (let i = 0; i < input.length; i++) {

        town = input[i];
        income = Number(input[i + 1]);

        if(!obj.hasOwnProperty(town)){
            obj[town] = income;
        } else {
            obj[town] += income;
        }
    }

    console.log(JSON.stringify(obj));
}

sumByTown(['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4']
)
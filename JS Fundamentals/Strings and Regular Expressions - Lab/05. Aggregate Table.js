function aggregateTable(input) {

    let towns = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
       let split = input[i].split('|');

       let town = split[1].trim();
       let number = Number(split[2]);
       towns.push(town);
       sum += number;
    }

    console.log(towns.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)
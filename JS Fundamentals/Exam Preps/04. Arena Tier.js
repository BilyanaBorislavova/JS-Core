function arenaTier(arr) {

    let map = new Map();


    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'Ave Cesar') {
            break;
        }

        let split = arr[i].split(/ -> | vs /).filter(a => a !== '');

        let gladiator = split[0];

        if (split.length === 3) {
            let technique = split[1];
            let skill = Number(split[2]);

            if (!map.has(gladiator)) {
                map.set(gladiator, new Map());
            }

            if (!map.get(gladiator).has(technique)) {
                map.get(gladiator).set(technique, skill);
            }

                if(map.get(gladiator).get(technique) < skill){
                    map.get(gladiator).set(technique, map.get(gladiator).get(technique), skill)
                }


        } else {
            let gladiatorTwo = split[1];

            let arr = [];
            let arrTwo = [];

            let numArr = [];
            let numArrTwo = [];

            if (map.has(gladiator) && map.has(gladiatorTwo)) {
                let valueOne = map.get(gladiator).keys();
                let valueTwo = map.get(gladiatorTwo).keys();

                let skillOne = map.get(gladiator).values();
                let skillTwo = map.get(gladiatorTwo).values();

                for (let obj1 of valueOne) {
                    arr.push(obj1);
                }

                for (let obj of valueTwo) {
                    arrTwo.push(obj);
                }

                for (let obj of skillOne) {
                    numArr.push(obj);
                }

                for (let obj of skillTwo) {
                    numArrTwo.push(obj);
                }

                for (let obj of arr) {
                    for (let obj1 of arrTwo) {

                        if (obj === obj1) {
                            for (let one of numArr) {
                                for (let two of numArrTwo) {
                                    if (one > two) {
                                        map.delete(gladiatorTwo)
                                    }
                                    if(two > one){
                                        map.delete(gladiator);
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }

    }

    let sortedGladiators = [...map].sort((a, b) => [...b[1].values()].reduce((a, b) => a + b) - [...a[1].values()].reduce((a, b) => a + b) || a[0].localeCompare(b[0]));


     for (let [gladiator, values] of sortedGladiators) {

        console.log(`${gladiator}: ${[...values.values()].reduce((a, b) => a + b)} skill`);

        let sortedValues = [...values].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

       for (let [technique, skill] of sortedValues) {
           console.log(`- ${technique} <!> ${skill}`);
       }
    }


}

arenaTier(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Stamat -> Tiger -> 350',
    'Ave Cesar'
])

//arenaTier(['Pesho -> Duck -> 400',
//    'Julius -> Shield -> 150',
//    'Gladius -> Heal -> 200',
//    'Gladius -> Support -> 250',
//    'Gladius -> Shield -> 250',
//    'Pesho vs Gladius',
//    'Gladius vs Julius',
//    'Gladius vs Gosho',
//    'Ave Cesar'
//])
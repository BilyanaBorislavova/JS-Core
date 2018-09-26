function marketing(arr) {

    let map = new Map();
    let subscribers = new Set();

    for (let i = 0; i < arr.length; i++) {

        let split = arr[i].split('-').filter(a => a !== '');
        let person = split[0];

        if(split.length === 1){

            if(!map.has(person)){
                map.set(person, []);
            }

        } else {
            let secondPerson = split[1];

            if(map.has(person) && map.has(secondPerson) && !subscribers.has(person)){
                map.get(secondPerson).push(person);
                subscribers.add(person);
            }
        }
    }

    let sortedMap = [...map].sort((a, b) => (a[1].length) < (b[1].length));
    console.log(sortedMap);
    let array = sortedMap.shift();
    let counter = 1;
    for (let k of array) {

        if(typeof k === "string"){
            console.log(k);
        } else {
            for (let obj of k) {
                console.log(`${counter}. ${obj}`);
                counter++;
            }
        }
    }
}

marketing(['A',
    'B',
    'C-A',
    'C-B',
    'C-D',
    'D-C'
])
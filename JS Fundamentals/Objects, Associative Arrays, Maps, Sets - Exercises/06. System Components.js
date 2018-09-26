function systemComponent(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {

        let [systemName, componentName, subcomponentName] = arr[i].split(' | ').filter(a => a !== '');

        if(!map.has(systemName)){
            map.set(systemName, new Map());
        }

        if(!map.get(systemName).has(componentName)){
            map.get(systemName).set(componentName, []);
        }

        map.get(systemName).get(componentName).push(subcomponentName);

    }

let sortedMap = [...map].sort((a, b) => [...b[1].keys()].length - [...a[1].keys()].length || a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

    for (let [sysName, components] of sortedMap) {
        console.log(sysName);
        let sortedNestedMap = [...components].sort((a, b) => [...b][1].length - [...a][1].length);
        for (let [compName, subNames] of sortedNestedMap) {
            console.log(`|||${compName}`);

            for (let name of subNames) {
                console.log(`||||||${name}`);
            }
        }
    }
}

systemComponent(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);
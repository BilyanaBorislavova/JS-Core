function championship(arr) {

    let map = new Map();

    for (let obj of arr) {
        let [teamName, pilotName, pilotPoints] = obj.split(" -> ").filter(a => a !== '');

        if(!map.has(teamName)){
            map.set(teamName, new Map())
        }

        if(!map.get(teamName).has(pilotName)){
            map.get(teamName).set(pilotName, Number(pilotPoints));
        } else {
            map.get(teamName).set(pilotName, map.get(teamName).get(pilotName) +Number(pilotPoints))
        }

    }

   let sortedMap = [...map].sort((a, b) => [...b[1].values()].reduce((a, b) => a + b) - [...a[1].values()].reduce((a, b) => a + b)).slice(0, 3);


   for (let [team, pilots] of sortedMap) {
       console.log(`${team}: ${[...pilots.values()].reduce((a, b) => a + b)}`);

       let sortedPilots = [...pilots].sort((a, b) => b[1] - a[1])
       for (let [pilot, points] of sortedPilots) {
           console.log(`-- ${pilot} -> ${points}`);
       }
   }
}

championship(['Ferrari -> Kimi Raikonnen -> 25',
'Ferrari -> Sebastian Vettel -> 18',
'Mercedes -> Lewis Hamilton -> 10',
'Mercedes -> Valteri Bottas -> 8',
'Red Bull -> Max Verstapen -> 6',
'Red Bull -> Daniel Ricciardo -> 4',
'Mercedes -> Lewis Hamilton -> 25',
'Mercedes -> Valteri Bottas -> 18',
'Haas -> Romain Grosjean -> 25',
'Haas -> Kevin Magnussen -> 25']
);
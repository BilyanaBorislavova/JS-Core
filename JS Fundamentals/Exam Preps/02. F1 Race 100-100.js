function race(arr) {

    let initialArr = arr.shift().split(' ').filter(a => a !== '');

    for (let obj of arr) {
        let [cmd, pilot] = obj.split(' ').filter(a => a !== '');

        if(cmd === 'Join' && !initialArr.includes(pilot)){
            initialArr.push(pilot);
        } else if(cmd === 'Crash' && initialArr.includes(pilot)){
            let indexToRemove = initialArr.indexOf(pilot);
            initialArr.splice(indexToRemove, 1);
        } else if(cmd === 'Pit' && initialArr.includes(pilot)){
            let moveDown = initialArr.indexOf(pilot);
            if(moveDown < initialArr.length - 1) {
                initialArr.splice(moveDown, 1);
                initialArr.splice(moveDown + 1, 0, pilot)
            }
        } else if(cmd === 'Overtake' && initialArr.includes(pilot)){
            let moveUp = initialArr.indexOf(pilot);
            if(moveUp > 0) {
                initialArr.splice(moveUp, 1);
                initialArr.splice(moveUp - 1, 0, pilot)
            }
        }
    }

    console.log(initialArr.join(' ~ '));
}

race(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
   "Overtake LeClerc",
   "Join Ricardo",
   "Crash Botas",
   "Overtake Ricardo",
   "Overtake Ricardo",
   "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
   "Crash Slavi"]

)
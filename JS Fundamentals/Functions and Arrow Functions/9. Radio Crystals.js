function radioCrystals(numArr) {

    let targetThickness = numArr[0];

    for (let i = 1; i < numArr.length; i++) {
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        console.log(`Processing chunk ${numArr[i]} microns`);

        while (numArr[i] / 4 >= targetThickness){
            numArr[i] /= 4;
            cutCount++;
        }

        if(cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            console.log(`Transporting and washing`);
            numArr[i] = Math.floor(numArr[i]);
        }
        if(numArr[i] === targetThickness){
            console.log(`Finished crystal ${numArr[i]} microns`);
            continue;
        }

        while (numArr[i] - (numArr[i] * 0.2) >= targetThickness){
            numArr[i] -= numArr[i] * 0.2;
            lapCount++;
        }

        if(lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            console.log(`Transporting and washing`);
            numArr[i] = Math.floor(numArr[i]);
        }

        if(numArr[i] === targetThickness){
            console.log(`Finished crystal ${numArr[i]} microns`);
            continue;
        }

        while (numArr[i] - 20 >= targetThickness){
            numArr[i] -= 20;
            grindCount++;
        }

        if(grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            console.log(`Transporting and washing`);
            numArr[i] = Math.floor(numArr[i]);
        }

        if(numArr[i] === targetThickness){
            console.log(`Finished crystal ${numArr[i]} microns`);
            continue;
        }

        while (numArr[i] - 2 >= targetThickness){
            numArr[i] -= 2;
            etchCount++;
        }
         if(etchCount > 0) {
             if (numArr[i] === targetThickness) {
                 console.log(`Etch x${etchCount}`);
                 console.log(`Transporting and washing`);
                 numArr[i] = Math.floor(numArr[i]);
                 console.log(`Finished crystal ${numArr[i]} microns`);
                 continue;
             }
         }

        while(numArr[i] + 1 !== targetThickness){
            numArr[i] -= 2;
            etchCount++;
        }

        if(etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            console.log(`Transporting and washing`);
            numArr[i] = Math.floor(numArr[i]);
        }

        if(numArr[i] === targetThickness){
            console.log(`Finished crystal ${numArr[i]} microns`);
            continue;
        }
        numArr[i] += 1;
        console.log(`X-ray x1`);

        if(numArr[i] === targetThickness){
            console.log(`Finished crystal ${numArr[i]} microns`);
            break;
        }

    }

}

radioCrystals([100, 99]);
//radioCrystals([1000, 4000, 8100])
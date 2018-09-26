function evenPositioneElements(arr) {

    let evenPositionedNums = [];

    for (let i = 0; i < arr.length; i++) {

        if(i % 2 === 0){
            evenPositionedNums.push(arr[i]);
        }
    }

    console.log(evenPositionedNums.join(' '));
}

evenPositioneElements(['20', '30', '40'])
function calcBoxes(numOfBottles, capacityPerBox) {
    let capacity = Math.ceil(numOfBottles / capacityPerBox);
    console.log(capacity);
}

calcBoxes(15, 7);
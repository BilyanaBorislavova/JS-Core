function buildAWall(arr) {

    let numArr = [];
    let day = [];

    for (let i = 0; i < arr.length; i++) {
        numArr.push(Number(arr[i]));
    }

    function equalsThirty(currentValue) {
        return currentValue === 30;
    }

    while (!numArr.every(equalsThirty)) {
        let count = 0;
        for (let i = 0; i < numArr.length; i++) {

            if (numArr[i] < 30) {
                numArr[i] += 1;
                count += 195;
            }
        }
        day.push(count);
    }

    console.log(day.join(', '));
    console.log(day.reduce((a, b) => a + b) * 1900 + ' ' + 'pesos');
}
buildAWall(["21","25","28"])
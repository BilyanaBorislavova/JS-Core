function aggregateElements(array) {

    let total = 0;
    let str = "";
    let nums = 0;

    for (const number of array) {
        total += number;
        str += number;
        nums += 1 / number;
    }

    console.log(total);
    console.log(nums);
    console.log(str);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
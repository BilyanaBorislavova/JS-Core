function distanceOverTime(arr) {

    let v1 = arr[0];
    let v2 = arr[1];
    let time = arr[2] / 60 / 60;

    let firstObjectTime = v1 * time;
    let secondObjectTime = v2 * time;

    let total = Math.abs(firstObjectTime - secondObjectTime) * 1000;
    console.log(total);
}

distanceOverTime([11, 10, 120])
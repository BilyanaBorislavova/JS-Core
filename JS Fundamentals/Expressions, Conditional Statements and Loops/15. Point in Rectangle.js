function pointInRectangle(numArr) {

    let x = numArr[0];
    let y = numArr[1];
    let xMin = numArr[2];
    let xMax = numArr[3];
    let yMin = numArr[4];
    let yMax = numArr[5];


    if(x <= xMax && x >= xMin && y <= yMax && y >= yMin){
        console.log("inside");
    }else {
        console.log("outside");
    }
}


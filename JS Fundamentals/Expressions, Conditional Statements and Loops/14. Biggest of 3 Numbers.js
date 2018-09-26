function biggestNumber(numArr) {

    let numOne = numArr[0];
    let numTwo = numArr[1];
    let numThree = numArr[2];

    if(numOne > numTwo && numOne > numThree){
        console.log(numOne);
    }else if(numTwo > numOne && numTwo > numThree){
        console.log(numTwo);
    }else{
        console.log(numThree);
    }
}
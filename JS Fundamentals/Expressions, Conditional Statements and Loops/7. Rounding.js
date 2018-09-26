function rounding(input) {

    let num = input[0];
    let roundTo = input[1];
    let decimal = num.toString().split(".")[1].length;

    if(roundTo <= 15){
        if(decimal >= roundTo) {
            console.log(num.toFixed(roundTo));
        }else{
            console.log(num);
        }
    } else {
        console.log(num.toFixed(15));
    }
}

rounding([3.1415926535897932384626433832795, 2])
rounding([10.5, 3])
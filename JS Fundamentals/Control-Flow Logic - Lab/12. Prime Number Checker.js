function primeOrNot(num) {

    let prime = false;

    if(num < 2){
        console.log("false");
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {

        if(num % i === 0 && num % 1 === 0){
            console.log("false");
        }else{
            console.log("true")
        }
    }
}

primeOrNot(7)
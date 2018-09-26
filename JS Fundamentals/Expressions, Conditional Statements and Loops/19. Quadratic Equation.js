function quadraticEquation(a, b, c) {

    let discriminant = (b * b) - 4 * (a  *c);

    let discriminantSquare = Math.sqrt(discriminant);
    if(discriminant > 0){
        let x1 = (-b + discriminantSquare) / (2 * a);
        let x2 = (-b - discriminantSquare) / (2 * a);

        if(x1 < x2){
            console.log(x1);
            console.log(x2);
        } else {
            console.log(x2);
            console.log(x1);
        }
    } else if (discriminant === 0){
        let x = -b / (2 * a);
        console.log(x);
    } else {
        console.log("No");
    }

}

quadraticEquation(1, -12, 36)
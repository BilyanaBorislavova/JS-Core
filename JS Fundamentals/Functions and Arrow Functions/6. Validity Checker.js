function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];


   function distance(x1,y1,x2,y2) {
       let distX = x2 - x1;
       let distY = y2 - y1;

       return Math.sqrt(distX * distX + distY * distY);
   }

   if(Number.isInteger(distance(x1,y1,0,0))) {

       console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
   }else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
}

if (Number.isInteger(distance(x2, y2, 0, 0))) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
} else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
}

if (Number.isInteger(distance(x1, y1, x2, y2))) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
} else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
}
//validityChecker([3, 0, 0, 4])
validityChecker([2, 1, 1, 1])
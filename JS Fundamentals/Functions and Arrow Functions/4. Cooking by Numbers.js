function cookingNumbers(arr) {

    let number = Number(arr[0]);

    for (var i = 1; i < arr.length; i++) {

        if(arr[i] === "dice"){
            number = Math.sqrt(number);
            console.log(number);
        } else if(arr[i] === "chop"){
            number /= 2;
            console.log(number);
        } else if(arr[i] === "spice"){
            number += 1;
            console.log(number);
        } else if(arr[i] === "bake"){
            number *= 3;
            console.log(number);
        } else if(arr[i] === "fillet"){
            number -= number * 0.2;
            console.log(number);
        }

    }

}

cookingNumbers(["9", "dice", "spice", "chop", "bake", "fillet"])
//cookingNumbers(["32", "chop", "chop", "chop", "chop", "chop"])
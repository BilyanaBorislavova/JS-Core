function modifyString(inputArr) {

    let result = "";

    for (let i = inputArr.length - 1; i >= 0; i--){
        for (let j = inputArr[i].length - 1; j >= 0; j--){
            result +=(inputArr[i][j]);
        }
    }

    console.log(result);
}

modifyString(["Sam", "Is", "Awesome"]);
function pollutedAir(matrixStr, arr) {

    let matrix = [];
    let pollutedAreas = [];


    for (let cmd of arr) {
        let split = cmd.split(' ');
        let command = split[0];
        let number = Number(split[1]);


        if (command === "breeze") {
            for (let i = 0; i < matrix.length; i++) {
                matrix[number][i] -= 15;
                if (matrix[number][i] < 0) {
                    matrix[number][i] = 0;
                }
            }
        } else if (command === "gale") {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][number] -= 20;
                if(matrix[i][number] < 0){
                    matrix[i][number] = 0;
                }

            }
        } else if (command === "smog") {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] += number;
                }
            }
        }

    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] >= 50){
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }

    }


    if(pollutedAreas.length <= 0){
        console.log("No polluted areas");
    } else {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    }


}

//pollutedAir([
//        "5 7 72 14 4",
//        "41 35 37 27 33",
//        "23 16 27 42 12",
//        "2 20 28 39 14",
//        "16 34 31 10 24",
//    ],
//    [" ", " ", " "]
//)


//pollutedAir([
//        "5 7 3 28 32",
//        "41 12 49 30 33",
//        "3 16 20 42 12",
//        "2 20 10 39 14",
//        "7 34 4 27 24",
//    ],
//    [
//        "gale 10", "gale 3"
//       // "breeze 1", "smog 2"
//    ]
//)
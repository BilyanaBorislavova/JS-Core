function biggestElement(matrix) {

    let biggestNum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if(biggestNum <= matrix[row + 1][col]){
                biggestNum = matrix[row][col];
            }
        }
    }

    console.log(biggestNum);
}

biggestElement([[-3, -55, -7, -122],
    [-111, -4, -33, -2, -38],
    [-8, -3, -0, -4]]
)
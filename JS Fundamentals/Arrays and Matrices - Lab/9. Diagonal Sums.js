function diagonalSums(matrix) {

    let sumOne = 0;
    let sumTwo = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumOne += (matrix[row][row]);
        sumTwo += (matrix[row][matrix.length - 1 - row]);
    }

    console.log(sumOne, sumTwo);
}

diagonalSums([[20,40],[10,60]])
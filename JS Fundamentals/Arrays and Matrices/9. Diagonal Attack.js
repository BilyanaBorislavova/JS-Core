function diagonalAttack(matrixStr) {

    let matrix = [];

    for (let i = 0; i < matrixStr.length; i++) {
        matrix[i] = matrixStr[i].split(' ').map(Number);
    }

    let mainSum = 0;
    let reversedSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if(row === col){
                mainSum += matrix[row][col];
            }

            if(col === matrix[row].length - row - 1){
                reversedSum += matrix[row][col];
            }

        }
    }

    if(mainSum === reversedSum){

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix[i].length; j++) {

                if(i !== j && j !== matrix[i].length - i - 1){
                    matrix[i][j] = mainSum;
                }
            }
        }
    }

    console.log(matrix.map(e => e.join(' ')).join('\n'));
}

//diagonalAttack(['5 3 12 3 1',
//    '11 4 23 2 5',
//    '101 12 3 21 10',
//    '1 4 5 2 2',
//    '5 22 33 11 1']
//)

diagonalAttack(['1 1 1', '1 1 1', '1 1 0'])
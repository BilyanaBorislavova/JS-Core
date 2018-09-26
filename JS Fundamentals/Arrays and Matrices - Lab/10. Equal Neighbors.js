function neighbours(matrix) {

    let counter = 0;

    for (let row = 0; row < matrix.length - 1; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            if(matrix[row][col] === matrix[row + 1][col]){
                counter++;
            }

            if(matrix[row][col] === matrix[row][col + 1]){
                counter++;
            }

            if(matrix[row + 1][col] === matrix[row + 1][col + 1]){
                counter++;
            }
        }

    }
    console.log(counter);
}

neighbours([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]

)
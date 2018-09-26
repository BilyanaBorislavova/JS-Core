function magicMatrices(matrix) {

    let rowSum = matrix.map(r => r.reduce((a, b) => a + b));

    let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    let checker = true;

    for (let i = 1; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            if (rowSum[i] === colSum[j]) {
                checker = true;
            } else {
                checker = false;
                break;
            }

        }
    }

    console.log(checker);

}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],]
)

magicMatrices([[11, 32, 45],
[21,0,1],
[21,1,1]])

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)
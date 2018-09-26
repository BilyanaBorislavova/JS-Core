function figureOfFourSquares(num) {

    let dashesCount = num - 2;
    let dash = '-';
    let space = ' ';

    if(num === 2){
         console.log("+++");
    }
    else if (num % 2 === 0) {
        console.log(`+${dash.repeat(dashesCount)}+${dash.repeat(dashesCount)}+`);

        for (let i = 1; i <= (num - 3 - 1) / 2; i++) {
            console.log(`|${space.repeat(dashesCount)}|${space.repeat(dashesCount)}|`);
        }
        console.log(`+${dash.repeat(dashesCount)}+${dash.repeat(dashesCount)}+`);

        for (let i = 1; i <= (num - 3 - 1) / 2; i++) {
            console.log(`|${space.repeat(dashesCount)}|${space.repeat(dashesCount)}|`);
        }
        console.log(`+${dash.repeat(dashesCount)}+${dash.repeat(dashesCount)}+`);

    } else {

        console.log(`+${dash.repeat(dashesCount)}+${dash.repeat(dashesCount)}+`);

        for (let i = 1; i <= (num - 3) / 2; i++) {
            console.log(`|${space.repeat(dashesCount)}|${space.repeat(dashesCount)}|`);
        }

        console.log(`+${dash.repeat(dashesCount)}+${dash.repeat(dashesCount)}+`);

        for (let i = 1; i <= (num - 3) / 2; i++) {
            console.log(`|${space.repeat(dashesCount)}|${space.repeat(dashesCount)}|`);
        }

        console.log(`+${dash.repeat(dashesCount)}+${dash.repeat(dashesCount)}+`);
    }

}

figureOfFourSquares(2);
function gradsToDegrees(grads) {

    let num = grads % 400;

    if(num < 0){
        num += 400;
    }

    let degrees = num / 400 * 360;

    console.log(degrees);

}

gradsToDegrees(400)
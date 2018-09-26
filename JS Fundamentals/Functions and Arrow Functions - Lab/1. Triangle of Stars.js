function triangleOfStars(n) {

    let star = '*';

    for (let i = 0; i < n; i++) {
        console.log(star);
        star += '*';
    }

    let newStarCount = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        console.log('*'.repeat(newStarCount));
        newStarCount--;
    }
}

triangleOfStars(5);
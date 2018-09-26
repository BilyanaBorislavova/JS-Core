function distanceBetweenTwoPoints3D(points) {

    let x1 = points[0];
    let y1 = points[1];
    let z1 = points[2];

    let x2 = points[3];
    let y2 = points[4];
    let z2 = points[5];

    let calculateXs = Math.pow((x2 - x1), 2);
    let calculateYs = Math.pow((y2 - y1), 2);
    let calculateZs = Math.pow((z2 - z1), 2);

    let formula = Math.sqrt(calculateXs + calculateYs + calculateZs);
    console.log(formula);
}

distanceBetweenTwoPoints3D([3.5, 0, 1, 0, 2, -1])
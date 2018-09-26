function distanceBetweenPoints(x1, y1, x2, y2) {
    let dX = x1 - x2;
    let dY = y1 - y2;
    let multi = dX * dX + dY * dY;
    let rad = Math.sqrt(multi);
    console.log(rad);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
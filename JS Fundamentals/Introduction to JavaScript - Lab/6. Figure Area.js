function calcFigureArea(w, h, W, H) {
    let sum = (w * h) + (W * H) - (Math.min(w, W) * Math.min(h, H));
    console.log(sum);
}

calcFigureArea(2, 4, 5, 3);
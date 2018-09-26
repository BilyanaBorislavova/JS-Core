function cone(r, height) {
    let volume = (Math.PI * Math.pow(r, 2) * height) / 3;

    let s = Math.sqrt((r * r) + (height * height));
    let lateralSurfaceArea  = Math.PI * r * s;
    let baseSurfaceArea = Math.PI * r * r;

    let area = lateralSurfaceArea + baseSurfaceArea;

    console.log(volume);
    console.log(area);
}

cone(3, 5);
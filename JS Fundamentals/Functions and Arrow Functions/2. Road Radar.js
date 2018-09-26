function roadRadar(input) {
    let speed = parseInt(input[0]);
    let area = input[1];

    let limit = 0;

    if(area === "motorway"){
        limit = 130;
    } else if(area === "interstate"){
        limit = 90;
    } else if(area === "city"){
        limit = 50;
    } else if(area === "residential"){
        limit = 20;
    }

    if(speed <= limit){

    }
    else if(speed >= limit + 1 && speed <= limit + 20){
        console.log("speeding");
    } else if(speed > limit + 20 && speed <= limit + 40){
        console.log("excessive speeding");
    } else if (speed > limit + 40){
        console.log("reckless driving");
    }

}

roadRadar(["21", "residential"])
roadRadar(["120", "interstate"])
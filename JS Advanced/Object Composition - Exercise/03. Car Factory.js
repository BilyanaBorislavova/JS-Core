function carFactory(initialCarObject) {
    let currentCarObject = {};
    currentCarObject.model = initialCarObject.model;
    currentCarObject.engine = {power:0, volume:0};

    if(initialCarObject.power <= 90){
        currentCarObject.engine = {power:90, volume:1800};
    } else if(initialCarObject.power > 90 && initialCarObject.power <= 120){
        currentCarObject.engine = {power:120, volume:2400};
    } else if(initialCarObject.power > 120 && initialCarObject.power <=200){
        currentCarObject.engine = {power:200, volume:3500};
    }

    currentCarObject.carriage = {type:initialCarObject.carriage, color:initialCarObject.color};

    let wheelNum = initialCarObject.wheelsize;
    if(wheelNum % 2 === 0){
        wheelNum -= 1;
    }

    currentCarObject.wheels = [wheelNum, wheelNum, wheelNum, wheelNum];

    return currentCarObject;
}

carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);
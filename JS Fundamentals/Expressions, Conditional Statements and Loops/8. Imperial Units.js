function inchToFeetAndInch(inch) {

    var feet = Math.floor(inch/12);
    var inches = inch % 12;

    console.log(`${feet}'-${inches}"`);
}

inchToFeetAndInch(36)
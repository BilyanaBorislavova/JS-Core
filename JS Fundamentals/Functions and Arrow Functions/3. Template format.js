function templateFormat(stringArray) {

    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");

    let even = "";
    let odd = "";

    for (var i = 0; i < stringArray.length; i++) {

        if(i % 2 === 0){
            console.log("  <question>");
            console.log("    " + stringArray[i]);
            console.log("  </question>");
        } else {
            console.log("  <answer>");
            console.log("    " + stringArray[i]);
            console.log("  </answer>");
        }
    }

    console.log("</quiz>");
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]

);
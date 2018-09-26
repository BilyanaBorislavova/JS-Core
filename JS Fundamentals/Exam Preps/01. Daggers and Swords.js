function blades(inputArr){

    let arr = [];

    for (let  i = inputArr.length - 1; i >= 0; i--) {

        let currBladeLength = Math.floor(Number(inputArr[i]));

        if(currBladeLength > 10){
            arr.unshift(currBladeLength);
        }
    }
    console.log("<table border=\"1\">");
    console.log("<thead>");
    console.log("<tr><th colspan=\"3\">Blades</th></tr>");
    console.log("<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>");
    console.log("</thead>");
    console.log("<tbody>");

    let result = "";
    let type = "";
    let bladeType = "";

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] > 40){
            type = "sword";
        } else {
            type = "dagger";
        }

        let lastDigit = arr[i] % 10;

        if(lastDigit === 1 || lastDigit === 6){
            bladeType = "blade";
        } else if (lastDigit === 2 || lastDigit === 7){
            bladeType = "quite a blade";
        } else if (lastDigit === 3 || lastDigit === 8){
            bladeType = "pants-scraper";
        } else if(lastDigit === 4 || lastDigit === 9){
            bladeType = "frog-butcher";
        } else {
            bladeType = "*rap-poker";
        }

        result += `<tr><td>${arr[i]}</td><td>${type}</td><td>${bladeType}</td></tr>\n`

    }

    console.log(result.substring(0, result.length - 1));

    console.log("</tbody>");
    console.log("</table>");
}

blades(['17.8',
'19.4',
'13',
'55.8',
'126.96541651',
'3']
);
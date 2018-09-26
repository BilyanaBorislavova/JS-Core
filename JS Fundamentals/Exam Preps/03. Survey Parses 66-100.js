function surveyParser(input) {
    let findSurvey = /<svg>(.*)?<\/svg>/g;
    let match;
    let matchOne;

    let ratingSum = 0;
    let countSum = 0;

    if(!findSurvey.exec(input)){
        console.log("No survey found");
    } else {
        let pattern = /<cat><text>(.*?)(\[.*?\])<\/text><\/cat>\s*/g;

        if(match = pattern.exec(input)){
            let bracketsText = match[2];

            let regex = /(<g><val>([0-9]+)<\/val>([0-9]+)<\/g>)/g;
            while(match = regex.exec(input)){
                let rating = Number(match[2]);
                let count = Number(match[3]);
                countSum += count;
                ratingSum += (rating * count);
            }

            let total = ratingSum / countSum;

            console.log(`${bracketsText.substring(1, bracketsText.length - 1)}: ${parseFloat(total.toFixed(2))}`);
        } else {
            console.log("Invalid format");
        }

    }


}

//[1surveyParser("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>")

surveyParser("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>")
surveyParser("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>")
surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");
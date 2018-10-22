function regex(input, command) {

    let nameRegex = / ([A-Z][a-zA-Z]*)-([A-Z][a-zA-Z]*)(\.-([A-Z][a-zA-Z]*))? /g;
    let airportRegex = / ([A-Z]{3})\/([A-Z]{3}) /g;
    let flightRegex = / ([A-Z]{1,3})([0-9]{1,5}) /g;
    let companyRegex = /- ([A-Z][a-z]*)\*([A-Z][a-z]*)? /g;
    let gateRegex = / ([A-Z][0-9]{2}[A-Z][0-9]{2}) /g;
    let departureTime = / STD([0-9]{2}:[0-9]{2}) /g;
    let arrivalTime = / STA([0-9]{2}:[0-9]{2}) /g;

    let match;
    let name;
    let newName;
    while (match = nameRegex.exec(input)){
        name = match[0];
        name = name.substring(1, name.length  - 1);
        newName = name.replace(/-/g, " ");
    }

    let matchTwo;
    let flightNumber;

    while(matchTwo = flightRegex.exec(input)){
        flightNumber = matchTwo[0];
        flightNumber = flightNumber.substring(1, flightNumber.length - 1);
    }

    let matchThree;
    let fromAirport;
    let toAirport;

    while(matchThree = airportRegex.exec(input)){
        let airports = matchThree[0];
        airports = airports.substring(1, airports.length - 1);
        airports = airports.split("/");
        fromAirport = airports[0];
        toAirport = airports[1];
    }

    let matchFour;
    let gate;

    while (matchFour = gateRegex.exec(input)){
        gate = matchFour[0];
        gate = gate.substring(1, gate.length - 1);
    }

    let matchFive;
    let departure;
    while(matchFive = departureTime.exec(input)){
        departure = matchFive[0];
        departure = departure.substring(1, departure.length - 1);
    }

    let matchSix;
    let arrival;
    while (matchSix = arrivalTime.exec(input)){
        arrival = matchSix[0];
        arrival = arrival.substring(1, arrival.length - 1);
    }

    let matchSeven;
    let company;

    while (matchSeven = companyRegex.exec(input)){
        company = matchSeven[0];
        company = company.substring(2, company.length - 1);
        company = company.replace(/\*/g, " ");
    }

    if(command === "name" && newName){
        console.log(`Mr/Ms, ${newName}, have a nice flight!`);
    }
    else if(command === "flight" && flightNumber && fromAirport && toAirport)
    {
        console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
    } else if(command === "times" && departure && gate && arrival){
        console.log(`Departure time is ${departure} from terminal ${gate}. Arrival time is ${arrival}.`);
    } else if(command === 'company' && company){
        console.log(`Have a nice flight with ${company}.`);
    } else if(command === "all" && newName && flightNumber && fromAirport && toAirport && departure && gate && arrival && company){
        console.log(`Mr/Ms, ${newName}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Departure time is ${departure} from terminal ${gate}. Arrival time is ${arrival}. Have a nice flight with ${company}.`);
    }else {
        console.log("INVALID");
    }



}

regex('ahah Second-Testov )*))&&baSOF/VARela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45 STA09:35', 'all');
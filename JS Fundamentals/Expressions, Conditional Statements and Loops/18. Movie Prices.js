function moviePrices(input) {

    let movieTitle = input[0].toLowerCase();
    let dayOfWeek = input[1].toLowerCase();

    let movieArr = ["the godfather", "schindler's list", "casablanca", "the wizard of oz"];
    let daysOfWeekArr = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    let price = 0;

    if(movieArr.includes(movieTitle) && daysOfWeekArr.includes(dayOfWeek)){

        if(movieTitle === "the godfather"){
            if(dayOfWeek === "monday"){
                price = 12;
            }else if(dayOfWeek === "tuesday"){
                price = 10;
            }else if(dayOfWeek === "wednesday" || dayOfWeek === "friday"){
                price = 15;
            }else if(dayOfWeek === "thursday"){
                price = 12.50;
            }else if(dayOfWeek === "saturday"){
                price = 25;
            }else if(dayOfWeek === "sunday"){
                price = 30;
            }
        }

        else if(movieTitle === "schindler's list"){

            if(dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "friday" || dayOfWeek === "thursday"){
                price = 8.50;
            } else if(dayOfWeek === "saturday" || dayOfWeek === "sunday"){
                price = 15;
            }
        }

        else if(movieTitle === "casablanca"){

            if(dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "friday" || dayOfWeek === "thursday"){
                price = 8;
            } else if(dayOfWeek === "saturday" || dayOfWeek === "sunday"){
                price = 10;
            }
        }

        else if(movieTitle === "the wizard of oz"){
            if(dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "friday" || dayOfWeek === "thursday"){
                price = 10;
            } else if(dayOfWeek === "saturday" || dayOfWeek === "sunday"){
                price = 15;
            }
        }

        console.log(price);

    }else{
        console.log("error");
    }

}

moviePrices(["the Godfather", "TUESDAY"]);
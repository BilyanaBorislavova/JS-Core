function test(number) {
    let spice = Number(number);
    let yield = Number(number);
    let totalSpice = 0;
    let days = 0;

    if(spice < 100){
        console.log(0);
        console.log(0);
    }else {

        while (yield >= 100) {
            totalSpice += spice;
            spice -= 26;
            yield -= 10;
            spice = yield;
            days++;
        }


        console.log(days);
        console.log(totalSpice - (days * 26) - 26);

    }
}

test([111])
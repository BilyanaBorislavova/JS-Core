 "use strict";
function getNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let tomorrow = new Date(date.getTime() + oneDay);
    console.log(tomorrow.getFullYear() + "-" + (tomorrow.getMonth() + 1) + "-" + tomorrow.getDate());

}

getNextDay(2016, 9, 30);
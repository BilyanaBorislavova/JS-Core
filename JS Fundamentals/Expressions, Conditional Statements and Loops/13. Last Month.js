function lastMonth(dateArr) {

    let day = dateArr[0];
    let month = dateArr[1];
    let year = dateArr[2];

    let lastMonth = new Date(year, month - 1);
    console.log(lastMonth.getUTCDate());
}

lastMonth([13, 12, 2004]);
lastMonth([17, 3, 2002]);
lastMonth([13, 1, 2017]);
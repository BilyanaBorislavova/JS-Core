function leapYear(year) {
    let parsedYear = parseInt(year);

    if((parsedYear % 4 === 0) && (parsedYear % 100 !== 0) || (parsedYear % 400 === 0)){
        console.log('yes');
    }else{
        console.log('no');
    }

}

leapYear(2014);
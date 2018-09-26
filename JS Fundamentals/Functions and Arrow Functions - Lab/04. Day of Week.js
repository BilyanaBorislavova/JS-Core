function dayOfWeek(input) {

    let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if(daysArr.includes(input)){
        let index = daysArr.indexOf(input);
        console.log(index + 1);
    } else {
        console.log("error");
    }
}

dayOfWeek("Monday")
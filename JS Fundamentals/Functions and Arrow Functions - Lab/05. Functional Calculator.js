function calculator(num1, num2, operator) {

    if(num2 != 0) {
        if (operator == "+") {
            console.log(num1 + num2);
        } else if (operator == "-") {
            console.log(num1 - num2);
        } else if (operator == "*") {
            console.log(num1 * num2);
        } else if (operator == "/") {
            console.log(num1 / num2);
        }
    }
}

calculator(2,4,"+")
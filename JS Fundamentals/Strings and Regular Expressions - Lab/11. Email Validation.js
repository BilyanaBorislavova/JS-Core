function emailValidation(input) {

    let pattern = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;

    if(input.match(pattern)){
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

emailValidation("valid@email1.bg")
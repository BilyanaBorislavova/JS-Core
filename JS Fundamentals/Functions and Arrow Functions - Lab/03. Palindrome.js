function isPalindrome(input) {

    let str = "";

    for (let i = input.length - 1; i >= 0; i--) {

        str += input[i];
    }

    if(input === str){
        console.log("true");
    } else {
        console.log("false");
    }
}

isPalindrome("racecar")
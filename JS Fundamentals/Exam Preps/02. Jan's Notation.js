function numbers(arr) {

    let numArr = [];

    for (let i = 0; i < arr.length; i++) {
        let input = arr[i];

        if(typeof input === 'number'){
            numArr.push(input);
        } else {

            if(numArr.length < 2){
                console.log("Error: not enough operands!");
                return;
            }
            let lastNum = numArr.pop();
            let firstNum = numArr.pop();

            switch (input){
                case "+":
                    numArr.push(firstNum + lastNum);
                    break;
                case "-":
                    numArr.push(firstNum - lastNum);
                    break;
                case "*":
                    numArr.push(firstNum * lastNum);
                    break;
                case "/":
                    numArr.push(firstNum / lastNum);
                    break;
            }
        }

    }

    if(numArr.length >= 2){
        console.log('Error: too many operands!');
    } else {
        console.log(numArr[0]);
    }

}
numbers([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']

)
function atmMachine(arr) {

    let money = [];

    function sortNumbers(a,b) {
        return b - a;
    }

    for (let i = 0; i < arr.length; i++) {

        if(arr[i].length > 2){
            let sum = 0;
            for (let banknote of arr[i]) {
                money.push(Number(banknote));
                sum += Number(banknote);
            }
            if(money.length > 0) {
                console.log(`Service Report: The ATM machine is loaded with ${sum}. Current balance is ${money.reduce((a, b) => a + b)}.`);
            }
        } else if(arr[i].length === 2){
            let currentBalance = Number(arr[i][0]);
            let moneyToWithdraw = Number(arr[i][1]);

            let sum = 0;
            if(money.length > 0){
                sum  = money.reduce((a, b) => a + b)
            }


                if (moneyToWithdraw > currentBalance) {
                    console.log(`There is not enough money in your account. Your current balance is ${currentBalance}.`);
                } else if (sum < moneyToWithdraw) {
                    console.log(`ATM machine is out of order!`);
                } else {
                    currentBalance -= moneyToWithdraw;
                    console.log(`You get ${moneyToWithdraw} lv. Your card balance is ${currentBalance}. Thank you!`);
                    money = money.sort(sortNumbers);

                    let currentSum = 0;

                    while (currentSum <= moneyToWithdraw) {
                        for (let j = 0; j < money.length; j++) {
                            if (money[j] <= moneyToWithdraw) {
                                currentSum += money[j];
                                moneyToWithdraw -= money[j];
                                money.splice(j, 1);
                                j--;
                            }
                        }
                    }
                }


        } else if(arr[i].length === 1){
            let counter = 0;
            for (let obj of money) {
                if(arr[i][0] === obj){
                    counter++;
                }
            }
            console.log(`Service Report: Banknotes from ${arr[i][0]} lv. in the ATM are ${counter}!`);
        }

    }


}

atmMachine([[50, 100],
    [10],
    [20, 20, 50],
    [20],
    [100, 50],
    [100, 100, 500, 10, 10, 20],
    [50, 100],
    [500, 500],
    [50, 20],
    [20],
    [10]]);

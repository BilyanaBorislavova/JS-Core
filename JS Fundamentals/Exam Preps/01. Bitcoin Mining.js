function bitcoinMining(inputArr) {

    let gramOfGold = 67.51;
    let bitcoinPrice = 11949.16;

    let currentAmount = 0;
    let totalAmountOfMoney = 0;

    let bitcoinCount = 0;
    let arr = [];
    let day = [];

    for (let i = inputArr.length - 1; i >= 0; i--) {
        let goldPerDay = Number(inputArr[i]);
        arr.unshift(goldPerDay);
    }

    let index = 1;

    for (let i = 0; i < arr.length; i++) {

        if(index % 3 === 0){
           arr[i] = arr[i] - (arr[i] * 0.3);
        }

        currentAmount = arr[i] * gramOfGold;
        totalAmountOfMoney += currentAmount;
        index++;

        if(totalAmountOfMoney >= bitcoinPrice){
            day.unshift(i + 1);
            while(totalAmountOfMoney >= bitcoinPrice){
                bitcoinCount++;
                totalAmountOfMoney -= bitcoinPrice;
            }
        }
    }

    if(bitcoinCount <= 0) {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Left money: ${totalAmountOfMoney.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Day of the first purchased bitcoin: ${day[day.length - 1]}`);
        console.log(`Left money: ${totalAmountOfMoney.toFixed(2)} lv.`);
    }
}

bitcoinMining(["100","200", "300"])
bitcoinMining([3124.15, 504.212, 2511.124])
//bitcoinMining([50, 100])
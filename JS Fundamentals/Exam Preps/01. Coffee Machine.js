function coffeeMachine(arr) {
    let totalMoney = 0;

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split(', ').filter(a => a !== '');
        let coinsInserted = Number(split[0]);
        let drink = split[1];

        let price = 0;

        if(split.length === 3)
        {
            let sugar = Number(split[2]);

            if(drink === 'cappuccino'){
                if(sugar > 0){
                    price += 0.10 + 1.30;
                } else {
                    price += 1.30;
                }
            } else if(drink === 'milk'){
                if(sugar > 0){
                    price += 0.10 + 1.00;
                } else {
                    price += 1.00;
                }
            } else if(drink === 'tea'){
                if(sugar > 0){
                    price += 0.10 + 0.80;
                } else {
                    price += 0.80;
                }
            }
        } else if(split.length === 4){
            let type = split[2];
            let sugar = Number(split[3]);
            if(drink === 'coffee'){
                if(type === 'caffeine'){
                    if(sugar > 0){
                        price += 0.10 + 0.80;
                    } else {
                        price += 0.80;
                    }
                } else if(type === 'decaf'){
                    if(sugar > 0){
                        price += 0.10 + 0.90;
                    } else {
                        price += 0.90;
                    }
                }
            } else if(drink === 'tea'){
                let milkPrice = 0;
                if(type === 'milk'){
                    if(sugar > 0){
                        price += 0.80;
                        milkPrice = (price * 0.1);
                        price += milkPrice;
                        price = Math.ceil(price * 10) / 10;
                       price += 0.10;
                    } else {
                        price += 0.80;
                        milkPrice = (price * 0.1);
                        price += milkPrice;
                        price = Math.ceil(price * 10) / 10;

                    }
                }
            }
        } else if(split.length === 5){
            let milkPrice = 0;
            let typeOfCoffee = split[2];
            let milk = split[3];
            let sugar = Number(split[4]);

            if(typeOfCoffee === 'caffeine'){
                if(sugar > 0){
                    price += 0.80;
                    milkPrice = (price * 0.1);
                    price += milkPrice;
                    price = Math.ceil(price * 10) / 10;
                    price += 0.10;
                }else {
                    price +=  0.80;
                    price += milkPrice;
                    price = Math.ceil(price * 10) / 10;

                }
            } else if(typeOfCoffee === 'decaf'){
                if(sugar > 0){
                    price += 0.90;
                    milkPrice = (price * 0.1);
                    price += milkPrice;
                    price = Math.ceil(price * 10) / 10;

                    price += 0.10;
                }else {
                    price +=  0.90;
                    milkPrice = (price * 0.1);
                    price += milkPrice;
                    price = Math.ceil(price * 10) / 10;

                }
            }

        }

        if(coinsInserted >= price)
        {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)} Change: ${(coinsInserted - price).toFixed(2)}`);
            totalMoney += price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${(price - coinsInserted).toFixed(2)} more`);
        }
    }

    console.log(`Income Report: ${totalMoney.toFixed(2)}`);
}


coffeeMachine(['1.00, coffee, caffeine, milk, 4',
    '0.50, cappuccino, 1',
    '0.40, tea, milk, 2',
    '1.30, milk, 0']
)
function restaurantBill(input) {

    let products = [];
    let sum = 0;

    for (let i = 0; i < input.length; i++) {

        if(i % 2 === 0){
            products.push(input[i]);
        } else {
            sum += Number(input[i]);
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])
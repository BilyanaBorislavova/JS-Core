function fruitOrVeggie(input) {

    let fruitArr = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let veggieArr = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    if(fruitArr.includes(input)){
        console.log("fruit");
    }else if(veggieArr.includes(input)){
        console.log("vegetable");
    }else{
        console.log("unknown");
    }
}

fruitOrVeggie("tomato")
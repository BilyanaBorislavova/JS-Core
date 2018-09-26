let robot = function () {

        let recepies ={
            Apple: {carbohydrate: 1, flavour: 2},
            Coke: {carbohydrate: 10, flavour: 20},
            Burger: {carbohydrate: 5, fat: 7, flavour: 3},
            Omelet: {protein: 5, fat: 1, flavour: 1},
            Cheverme: {protein: 10, carbohydrate: 10, fat:10, flavour: 10}
        };

        let ingredientsInStock = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};

        return function (input) {
            let [cmd, ingredient, quantity] = input.split(' ');
            quantity = Number(quantity);

            if (cmd === 'restock') {
                ingredientsInStock[ingredient] += quantity;
                return "Success"
            } else if(cmd === 'report'){
                return `protein=${ingredientsInStock.protein} carbohydrate=${ingredientsInStock.carbohydrate} fat=${ingredientsInStock.fat} flavour=${ingredientsInStock.flavour}`
            } else if(cmd === 'prepare'){

                let newObj = {};
                let result = '';

                for (let obj of Object.keys(recepies[ingredient])) {
                    newObj[obj] = recepies[ingredient][obj] * quantity;
                }

                let isTrue = true;

                for (let obj of Object.keys(newObj)) {
                    if(ingredientsInStock[obj] < newObj[obj]){
                        isTrue = false;
                        result = `Error: not enough ${obj} in stock`;
                        break;
                    }
                }

                if(isTrue){
                    for (let obj of Object.keys(newObj)) {
                        ingredientsInStock[obj] -= newObj[obj];
                    }
                    result = "Success"
                }
                return result
            }

        }
}

robot('prepare flavour 50');
function hungryProgrammer(meals, commands) {

    let mealsEatenCount = 0;

    for (let i = 0; i < commands.length; i++) {

        let split = commands[i].split(" ");

        if(split[0] === "Serve"){
            if(meals.length > 1) {
                console.log(`${meals[meals.length - 1]} served!`);
                meals.splice(meals.length - 1, 1);
            }
        } else if(split[0] === "Add"){
            let mealToAdd = split[1];
                try{
                    if(mealToAdd.length >= 1) {
                        meals.unshift(mealToAdd);
                    }
                } catch (err) {

                }

        } else if(split[0] === "Eat"){
            if(meals.length >= 1){
                console.log(`${meals[0]} eaten`);
                mealsEatenCount++;
                meals.splice(0, 1);
            }
        } else if(split[0] === "Consume"){
            let startIndex = parseInt(split[1]);
            let endIndex = parseInt(split[2]);

            if(startIndex < meals.length && endIndex <= meals.length){
                meals.splice(startIndex, endIndex - startIndex + 1);
                console.log("Burp!");
                mealsEatenCount += endIndex - startIndex + 1;
            }
        } else if(split[0] === "Shift"){
            let firstIndex = parseInt(split[1]);
            let secondIndex = parseInt(split[2]);

            if(firstIndex < meals.length && secondIndex <= meals.length){
                let firstMeal = meals[firstIndex];
                let secondMeal = meals[secondIndex];

                meals.splice(firstIndex, 1);
                meals.splice(firstIndex, 0, secondMeal);
                meals.splice(secondIndex, 1);
                meals.splice(secondIndex, 0, firstMeal);
            }
        } else if(split[0] === "End"){
            break;
        }

    }
    if(meals.length <= 0){
        console.log(`The food is gone`);
        console.log(`Meals eaten: ${mealsEatenCount}`);
    } else {
        console.log(`Meals left: ${meals.join(', ')}`);
        console.log(`Meals eaten: ${mealsEatenCount}`);
    }

}

hungryProgrammer([],
['Serve',
    'Eat',
    'Consume 0 0',
    'Add chicken',
'Add rice',
'Eat',
'End']


)
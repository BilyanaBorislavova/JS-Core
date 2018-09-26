function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let trashedHelmet = Math.floor(lostFights / 2);
    let brokenSword = Math.floor(lostFights / 3);
    let brokenShield = 0;
    let brokenArmor = 0;

    for (let i =1; i <= lostFights; i++) {

        if(i % 2 === 0 && i % 3 === 0){
            brokenShield++;
        }

    }

    for (let i = 1; i <= brokenShield; i++) {
        if(i % 2 === 0){
            brokenArmor++;
        }
    }

    let expenses = (helmetPrice * trashedHelmet) + (swordPrice * brokenSword) + (shieldPrice * brokenShield) + (armorPrice * brokenArmor);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(23,
12.50,
21.50,
40,
200)
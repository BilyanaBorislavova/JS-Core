function firstTask(arr) {

    let specializedProfessions = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing']

    let mariykaGold = 0;
    let counter = 1;
    let secondCounet = 1;

    for (let i = 0; i < arr.length; i++) {
        let [profession, goldOffered] = arr[i].split(' : ').filter(a => a !== '');

        goldOffered = Number(goldOffered);

        if(specializedProfessions.includes(profession) && goldOffered >= 200){

            goldOffered -= goldOffered * 0.2;

                if (counter % 2 === 0) {
                    mariykaGold += 200;
                }
                    mariykaGold += goldOffered;


            counter++;
        }

        if(average.includes(profession)){
            mariykaGold += goldOffered;
        }

        if(clumsy.includes(profession)){


            if(secondCounet % 2 === 0){
                goldOffered -= (goldOffered * 0.05);
                mariykaGold += goldOffered;
            }
            else if(secondCounet % 3 === 0){
                goldOffered -= (goldOffered * 0.1);
                mariykaGold += goldOffered;
            } else {
                mariykaGold += goldOffered;
            }

            secondCounet++;
        }

    }

    if(mariykaGold < 1000){
        console.log(`Final sum: ${mariykaGold.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000 - mariykaGold).toFixed(2)} gold more to continue in the next task.`);
    } else {
        console.log(`Final sum: ${mariykaGold.toFixed(2)}`);
        console.log(`Mariyka earned ${(mariykaGold - 1000).toFixed(2)} gold more.`);
    }


}

firstTask(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"])
firstTask(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])
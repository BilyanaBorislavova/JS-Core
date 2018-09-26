function kompot(arr) {

    let cherryTotal = 0;
    let peachTotal = 0;
    let plumTotal = 0;
    let otherTotal = 0;

    for (let obj of arr) {
        let [fruit, kg] = obj.split(' ').filter(a => a!== '');

        if(fruit === 'cherry'){
           cherryTotal += Number(kg);
        } else if(fruit === 'peach'){
            peachTotal += Number(kg);
        } else if(fruit === 'plum'){
            plumTotal += Number(kg);
        } else {
            otherTotal += Number(kg);
        }
    }

    let plumKompot = Math.floor(((plumTotal * 100) / 0.2) / 100);
    let cherryKompot = Math.floor(((cherryTotal * 100) / 0.09) / 250);
    let peachKompot = Math.floor(((peachTotal * 100) / 1.4) / 25);

    console.log(`Cherry kompots: ${cherryKompot}`);
    console.log(`Peach kompots: ${peachKompot}`);
    console.log(`Plum kompots: ${plumKompot}`);
    console.log(`Rakiya liters: ${(otherTotal * 0.2).toFixed(2)}`);
}

kompot([ 'cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0' ,
    'papaya 20' ]
)
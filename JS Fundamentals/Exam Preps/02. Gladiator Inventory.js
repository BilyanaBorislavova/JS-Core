function gladiatorInventory(arr) {
    let peshoInventory = arr.shift();
    let peshoSplit = peshoInventory.split(' ').filter(a => a !== '');

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] === 'Fight!'){
            break;
        }

        let split = arr[i].split(/[\s\-]/).filter(a => a !== '');
        let command = split[0];
        let equipment = split[1];

        if(command === 'Buy' && !peshoSplit.includes(equipment)){
            peshoSplit.push(equipment);
        }

        if(command === 'Trash' && peshoSplit.includes(equipment)){
            let index = peshoSplit.indexOf(equipment);
            if (index > -1) {
                peshoSplit.splice(index, 1);
            }
        }

        if(command === 'Repair' && peshoSplit.includes(equipment)){
            let index = peshoSplit.indexOf(equipment);
            if (index > -1) {
                peshoSplit.splice(index, 1);
            }
            peshoSplit.push(equipment);
        }

        if(command === 'Upgrade' && peshoSplit.includes(equipment)){
            let upgrade = split[2];
            let index = peshoSplit.indexOf(equipment);
            peshoSplit.splice(index + 1, 0, `${equipment}:${upgrade}`);
        }
    }

    console.log(peshoSplit.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!',
    'Me'
])
function ancientVSmemory(arr) {
    let nums = [];

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split(' ').filter(a => a !== '' && a !== "0" && a !== "32656" && a !== "19759" && a !== "32763");

        for (let obj of split) {
            let num = Number(obj);
            nums.push(num);
        }
    }

    let result = "";
    nums.shift();
    for (let obj of nums) {
        let chr = String.fromCharCode(obj);

        if(obj >= 32 && obj <= 126){
            result += chr;
        }

        if(obj < 32){
            result += " ";
        }
    }

   let resultSplit = result.split(' ').filter(a => a !== '');
    console.log(resultSplit.join('\n'));
}

ancientVSmemory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
])
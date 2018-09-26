function uniqueWords(arr) {

    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].toLowerCase().split(/\W/).filter(a => a !== '');

        for (let word of split) {
            set.add(word);
        }
    }

    let result = "";
    for (let obj of set) {
        result += obj + ", ";
    }

    console.log(result.substring(0, result.length - 2));
}

uniqueWords(['aa','aa','b'])
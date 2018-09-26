function capitalizeWords(input) {

    let split = input.split(' ');
    let words = [];
    let finalOutput = [];

    for (let word of split) {

        if(word !== word.toLowerCase()){
                word = word.replace(word, word.toLowerCase());
        }
        words.push(word);
    }

    for (let word of words) {
        if(word[0] !== word[0].toUpperCase()){
            word = word.replace(word[0], word[0].toUpperCase())
        }

        finalOutput.push(word);
    }

    console.log(finalOutput.join(' '));

}

capitalizeWords("Was that Easy? tRY thIs onE for SiZe!")
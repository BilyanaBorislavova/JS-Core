function letterOccurence(word, letter) {
    let count = 0;
    for (var i = 0; i < word.length; i++) {
        if(word[i] == letter) {
            count++;
        }
    }
    console.log(count);
}

letterOccurence("word", "o");
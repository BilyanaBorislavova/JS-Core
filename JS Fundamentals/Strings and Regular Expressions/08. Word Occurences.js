function wordOccurence(sentence, word) {
    let pattern = new RegExp(`\\b(${word.toLowerCase()})\\b`, 'g');
    let match;
    let counter = 0;
    while(match = pattern.exec(sentence.toLowerCase())) {
        counter++;
    }
    console.log(counter);
}

wordOccurence('The waterfall was so high, that the thechild couldn’t see its peak.',
    'the'
)
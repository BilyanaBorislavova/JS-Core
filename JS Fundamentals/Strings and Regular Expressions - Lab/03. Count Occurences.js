function findOccurences(word, input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {

        if (input.substring(i, i + word.length) === word) {
            result.push(i);
        }
    }

    console.log(result.length);
}

findOccurences('the', 'The quick brown fox jumps over the lay dog.')
findOccurences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')
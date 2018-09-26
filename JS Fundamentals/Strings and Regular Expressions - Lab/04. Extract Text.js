function extractText(text) {

    let firstIndex = text.indexOf('(');
    let secondIndex = text.indexOf(')', firstIndex);
    let extractedText = [];

    while (firstIndex > -1 && secondIndex > -1){
        let result = text.substring(firstIndex + 1, secondIndex);
        extractedText.push(result);
        firstIndex = text.indexOf('(', secondIndex);
        secondIndex = text.indexOf(')', firstIndex);
    }

    console.log(extractedText.join(', '));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
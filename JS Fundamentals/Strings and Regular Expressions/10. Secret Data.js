function secretData(input) {
    let regexName = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let regexNumber = /\+[0-9\-]{10}(?=\s|$)/g;
    let regexId = /(![a-zA-Z0-9]+)(?=\s|\t|$)/g;
    let regexBase = /(_[A-Za-z0-9]+)(?=\s|$)/g;

    let matchName;
    let matchId;
    let matchNumber;
    let matchBase;

    for (let sentence of input) {
        while(matchName = regexName.exec(sentence)) {

            sentence = sentence.replace(matchName[0], '|'.repeat(matchName[0].length))
        }

        while(matchId = regexId.exec(sentence)){
            sentence = sentence.replace(matchId[0], '|'.repeat(matchId[0].length))
        }

        while (matchBase = regexBase.exec(sentence)){
            sentence = sentence.replace(matchBase[0], '|'.repeat(matchBase[0].length))
        }

        while(matchNumber = regexNumber.exec(sentence)){
            sentence = sentence.replace(matchNumber[0], '|'.repeat(matchNumber[0].length));
        }
        console.log(sentence);
    }

}

secretData(['Agent *Me *You was in the room when it all happened.',
    'The person in the room*Him was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I cant really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really dont know what happened there.',
'This is all I saw, that night.'
])
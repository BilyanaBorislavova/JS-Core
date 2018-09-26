function matchAllWords(input) {

    let pattern = /[\w]+/g;
    let regex = new RegExp(pattern);

    console.log(input.match(regex).join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')
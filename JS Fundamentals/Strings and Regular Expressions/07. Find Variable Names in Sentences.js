function findVariables(input) {
    let pattern = /_([a-zA-Z0-9]+)/g;

    let match;
    let result = [];

    while (match = pattern.exec(input)){
        result.push(match[1]);
    }

    console.log(result.join(','));
}

findVariables("The _id and _age variables are both integers.")
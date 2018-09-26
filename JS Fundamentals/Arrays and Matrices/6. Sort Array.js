function sortArray(input) {

    input.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(input.join(`\n`));
}

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
])

sortArray(['test',
    'Deny',
    'omen',
    'Default'
])

sortArray(['alpha',
    'beta',
    'gamma'
])
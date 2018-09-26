function matchDates(input) {

    let pattern = /\b([0-9]{1,2})-([A-Z]{1}[a-z]{2})-([0-9]{4})\b/g;
    let result = [];
    let match;

    for (let date of input) {

        while (match = pattern.exec(date)){
            result.push(`${match[1]}-${match[2]}-${match[3]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
        }
    }

    console.log(result.join('\n'));

}

matchDates(['I am born on 30-Dec-1994.',
'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.']
)
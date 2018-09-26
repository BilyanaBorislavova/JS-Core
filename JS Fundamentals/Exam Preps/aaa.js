function softUniForum(arr) {
    let bannedWords = arr.pop().split(' ').filter(a => a !== '');
    let regex = /#(\b[A-Za-z][A-Za-z0-9-_]+[A-Za-z0-9]\b)/g;
    let m;
    let index = 0;
    if(bannedWords.includes('<code>')){
        index = 0;
    } else {
        index = arr.indexOf('<code>');
    }
    let lastIndex = arr.indexOf('</code>');
    let newArr = arr.splice(index, lastIndex);

        for (let s of arr) {
            while (m = regex.exec(s)) {

                if(!bannedWords.includes(m[1])) {
                    s = s.replace(m[0], `<a href=\"/users/profile/show/${m[1]}\">${m[1]}</a>`)
                } else {
                    s = s.replace(m[0], '*'.repeat(m[1].length))
                }
            }

            console.log(s);
        }

    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }

}

//oftUniForum(['#RoYaL: I\'m not sure what you mean,',
//but I am confident that I\'ve written',
//everything correctly. Ask #iordan_93',
//and #pesho if you don\'t believe me',
//<code>',
//#trying to print stuff',
//print("yoo")',
//</code>',
//pesho gosho'
//)

softUniForum(['Asd asd asd asd asd <code>',
'#asdasd',
'#asdd',
'#asdddd',
'#asdasdasd',
'</code>',
'Kodime po cel den',
'<code>',
'//#namore',
'System.out.print("Otiame na more");',
'<code>',
'Tiq gornite tagowe shto ne mi rabotqt?',
'#pisnami',
'pisnami'])
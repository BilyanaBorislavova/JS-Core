function formFiller(username, email, number, input) {

    let usernamePattern = /<![a-zA-Z]+!>/;
    let emailPattern = /<@[a-zA-Z]+@>/;
    let numberPattern = /<\+[a-zA-Z]+\+>/;

    for (let data of input) {

        let usernameMatch = usernamePattern.exec(data);
        if(usernameMatch){
            data = data.replace(usernameMatch, username);
        }

        let emailMatch = emailPattern.exec(data);
        if(emailMatch){
            data = data.replace(emailPattern, email);
        }

        let phoneMatch = numberPattern.exec(data);
        if(phoneMatch){
            data = data.replace(numberPattern, number);
        }

        console.log(data);
    }

   // console.log(input);

}

formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
)
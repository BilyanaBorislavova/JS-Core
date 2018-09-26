function usernames(input) {

    let result = "";

    for (let i = 0; i < input.length; i++) {
        let username = input[i].split('@');
        result += (username[0] + '.');
        let end = "";

        let mail = username[1].split('.');

        for (let letter of mail) {
            end += (letter[0]);
        }
        result += (end + ", ");
    }

    console.log(result.substring(0, result.length - 2));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
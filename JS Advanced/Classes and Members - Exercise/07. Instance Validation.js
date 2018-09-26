class CheckingAccount{

    constructor(clientId, email, firstName, lastName){
        this.clientId = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.products = [];

        if(!clientId.match(/^[0-9]{6}$/)){
            throw new TypeError("Client ID must be a 6-digit number")
        } else {
            this.clientId = clientId;
        }

        if(!email.match(/^\w+@[a-z.]+$/)){
            throw new TypeError("Invalid e-mail")
        } else {
            this.email = email;
        }

        if(firstName.length < 3 || firstName.length > 20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        } else if (!firstName.match(/^[a-zA-Z]{3,20}$/)){
            throw new TypeError("First name must contain only Latin characters")
        } else {
            this.firstName = firstName;
        }

        if(lastName.length < 3 || lastName.length > 20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        } else if (!lastName.match(/^[a-zA-Z]{3,20}$/)){
            throw new TypeError("Last name must contain only Latin characters")
        } else {
            this.lastName = lastName;
        }

    }

}
function validate() {

    let isValid = true;

       $('#company').on('change', function () {
           if($('#company').is(":checked")){
               $('#companyInfo').show();
           } else {
               $('#companyInfo').hide();
           }
       });


    $('#submit').on('click', function (event) {
        event.preventDefault();
        //USERNAME VALIDATION
        let usernameValidation = /^[a-zA-Z0-9]{3,20}$/;
        let username = $('#username').val();
        if(username.match(usernameValidation)){
            $('#username').css("border-color", "none");
        } else {
            $('#username').css("border-color", "red");
            isValid = false;
        }

        //PASSWORD VALIDATION
        let passwordValidation = /^\w{5,15}$/;
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
        if(password.match(passwordValidation)){
            $('#password').css("border-color", "none");
        } else {
            $('#password').css("border-color", "red");
            isValid = false;
        }

        if(confirmPassword === password && confirmPassword.match(passwordValidation)){
            $('#confirm-password').css("border-color", "none");
        } else {
            $('#confirm-password').css("border-color", "red");
            isValid = false;
        }

        //EMAIL VALIDATION
        let emailValidation = /@.*\./;
        let email = $('#email').val();
        if(email.match(emailValidation)){
            $('#email').css("border-color", "none");
        } else {
            $('#email').css("border-color", "red");
            isValid = false;
        }

        if($('#company').is(":checked")){
           if( $('#companyNumber').val().match(/^[1-9]{1}[0-9]{3}$/)) {
               $('#companyNumber').css('border', 'none');
           }
        } else {
            $('#companyNumber').css('border', 'red');
            isValid = false;
        }

        if(isValid){
            $('#valid').show()
        } else {
            $('#valid').hide();
        }


    })

}

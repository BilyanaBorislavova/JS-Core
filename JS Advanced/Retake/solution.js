function makeReservation(container) {
    $('#submit').on('click', submit);
    $('#edit').on('click', edit);
    $('#continue').on('click', continueFunc);
    
    function submit() {
        let fullName = $('#fullName').val();
        let email = $('#email').val();
        let number = $('#phoneNumber').val();
        let address = $('#address').val();
        let code = $('#postalCode').val();

        if(fullName !== '' && email !== '') {

            $('#infoPreview').append($('<li>').text(`Name: ${fullName}`).attr('id', 'name'))
                .append($('<li>').text(`E-mail: ${email}`).attr('id', 'e-mail'))
                .append($('<li>').text(`Phone: ${number}`).attr('id', 'phone'))
                .append($('<li>').text(`Address: ${address}`).attr('id', 'addresss'))
                .append($('<li>').text(`Postal Code: ${code}`).attr('id', 'code'));

            $('#fullName').val('');
            $('#email').val('');
            $('#phoneNumber').val('');
            $('#address').val('');
            $('#postalCode').val('');

            $('#submit').attr('disabled', true);
            $('#edit').attr('disabled', false);
            $('#continue').attr('disabled', false);
        }
    }
    
    function edit() {
        let name = $('#name').text().slice(6);
        let email = $('#e-mail').text().slice(8);
        let number = $('#phone').text().slice(7);
        let address = $("#addresss").text().slice(9);
        let code = $('#code').text().slice(13);

        $('#fullName').val(name);
        $('#email').val(email);
        $('#phoneNumber').val(number);
        $('#address').val(address);
        $('#postalCode').val(code);

        $('#infoPreview').empty();
        $('#submit').attr('disabled', false);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);
    }
    
    function continueFunc() {
        $('#submit').attr('disabled', true);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);

        $('#container').append($('<h2>').text('Payment details'));
        let select = $('<select>').attr('id', 'paymentOptions').addClass('custom-select');
        select.append($('<option selected disabled hidden>').text('Choose'));
        select.append($('<option>').attr('value', 'creditCard').text('Credit Card'));
        select.append($('<option>').attr('value','bankTransfer').text('Bank Transfer'));
        $('#container').append(select);
        $('#container').append($('<div>').attr('id', 'extraDetails'));
        $('#paymentOptions').on('change', payment);
    }

    function payment() {
        let selected = $('#paymentOptions option:selected').val();

        $('#extraDetails').empty();

        if(selected === 'creditCard'){
            let divOne = $('<div>').addClass('inputLabel').text('Card Number').append('<input>');
            let brOne = $('<br>');
            let divTwo = $('<div>').addClass('inputLabel').text('Expiration Date').append('<input>');
            let brTwo = $('<br>');
            let divThree = $('<div>').addClass('inputLabel').text('Security Numbers').append('<input>');
            let brThree = $('<br>');
            let button = $('<button>').attr('id', 'checkOut').text('Check Out');
            $('#extraDetails').append(divOne);
            $('#extraDetails').append(brOne);
            $('#extraDetails').append(divTwo);
            $('#extraDetails').append(brTwo);
            $('#extraDetails').append(divThree);
            $('#extraDetails').append(brThree);
            $('#extraDetails').append(button);
        } else if(selected === 'bankTransfer'){
            let p = $(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`);
            let button = $('<button>').attr('id', 'checkOut').text('Check Out');
            $('#extraDetails').append(p);
            $('#extraDetails').append(button);
        }
        
        $('#checkOut').on('click', checkOut);
    }
    
    function checkOut() {
        $('#wrapper').empty();
        $('#wrapper').append($('<h4>').text('Thank you for your reservation!'))
    }
}
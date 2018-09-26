function attachEvents(){
    let url = 'https://phonebook-nakov.firebaseio.com/phonebook';


    $('#btnLoad').on('click', function () {

        $.ajax({
            method: "GET",
            url: url + '.json'
        }).then(function loadContacts(contacts) {
            $('#phonebook').empty();
            for (let contact in contacts) {
                let person = contacts[contact]['person'];
                let phone = contacts[contact]['phone'];
                let li = $('<li>').text(`${person}: ${phone} `);
                let deleteButton = $('<button>[Delete]</button>');
                deleteButton.on('click', function () {
                    $.ajax({
                        method: "DELETE",
                        url: url  +'/' + contact + '.json'
                    });
                    $(this).closest('li').remove();
                });
                li.append(deleteButton);
                $('#phonebook').append(li)
            }
        })
    });

    $('#btnCreate').on('click', function () {
        let person = $('#person').val();
        let phone = $('#phone').val();
        let obj = JSON.stringify({
            person: person,
            phone: phone
        });

        $.ajax({
            method: "POST",
            url: url + '.json',
            data: obj
        });


        $('#person').val('');
        $('#phone').val('');
    });
}
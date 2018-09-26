function attachEvents() {
    const user = 'Pesho';
    const password = 'pesho';
    const BASE_64 = btoa(user + ':' + password);
    const AUTH = {"Authorization": 'Basic ' + BASE_64};

    $('.load').on('click', function () {
        $.ajax({
            method: "GET",
            url: `https://baas.kinvey.com/appdata/kid_Sypce8747/biggestCatches`,
            headers: AUTH
        }).then(function load(list) {
            let createDiv = '';
            for (let obj of list) {
                console.log(obj);
                //createDiv = $('<div>');
                let updateBtn = $('<button class="update">Update</button>').on('click', function () {
                    let angler = $('.catch').find('.angler').val();
                    let weight = Number($('.catch').find('.weight').val());
                    let species = $('.catch').find('.species').val();
                    let location =  $('.catch').find('.location').val();
                    let bait = $('.catch').find('.bait').val();
                    let captureTime = Number($('.catch').find('.captureTime').val());

                    $.ajax({
                        method: "PUT",
                        url: `https://baas.kinvey.com/appdata/kid_Sypce8747/biggestCatches/${obj._id}`,
                        headers: AUTH,
                        contentType: 'application/json',
                        data: JSON.stringify({angler: angler, weight: weight, species: species, location: location, bait: bait, captureTime: captureTime})
                    }).then(function () {

                    }).catch(function (err) {
                        console.log(err);
                    })
                });

                let deleteBtn = $('<button class="delete">Delete</button>').on('click', function () {
                    $.ajax({
                        method: "DELETE",
                        url: `https://baas.kinvey.com/appdata/kid_Sypce8747/biggestCatches/${obj._id}`,
                        headers: AUTH,
                        contentType: 'application/json'
                    }).then(function () {
                        $(this).closest('div').remove();
                    }).catch(function (err) {
                        console.log(err);
                    })
                });
                createDiv = ($('<div>').addClass('catch').attr('data-id', obj._id));
                createDiv.append($('<label>').text('Angler'));
                createDiv.append($('<input>').attr('type', 'text').addClass('angler').val(obj.angler));
                createDiv.append($('<label>').text('Weight'));
                createDiv.append($('<input>').attr('type', 'number').addClass('weight').val(obj.weight));
                createDiv.append($('<label>').text('Species'));
                createDiv.append($('<input>').attr('type', 'text').addClass('species').val(obj.species));
                createDiv.append($('<label>').text('Location'));
                createDiv.append($('<input>').attr('type', 'text').addClass('location').val(obj.location));
                createDiv.append($('<label>').text('Bait'));
                createDiv.append($('<input>').attr('type', 'text').addClass('bait').val(obj.bait));
                createDiv.append($('<label>').text('Capture Time'));
                createDiv.append($('<input>').attr('type', 'number').addClass('captureTime').val(obj.captureTime));
                createDiv.append(updateBtn);
                createDiv.append(deleteBtn);
                $('#catches').append(createDiv)
            }
        }).catch(function (err) {
            console.log(err);
        })
    });

    $('.add').on('click', function () {
        let angler = $('#aside').find('.angler').val();
        let weight = Number($('#aside').find('.weight').val());
        let species = $('#aside').find('.species').val();
        let location =  $('#aside').find('.location').val();
        let bait = $('#aside').find('.bait').val();
        let captureTime = Number($('#aside').find('.captureTime').val());
        $.ajax({
            method: "POST",
            url: `https://baas.kinvey.com/appdata/kid_Sypce8747/biggestCatches`,
            headers: AUTH,
            contentType: 'application/json',
            data: JSON.stringify({angler: angler, weight: weight, species: species, location: location, bait: bait, captureTime: captureTime})
        }).then(function load() {
            $('#aside').find('.angler').val('');
            $('#aside').find('.weight').val('');
            $('#aside').find('.species').val('');
            $('#aside').find('.location').val('');
            $('#aside').find('.bait').val('');
            $('#aside').find('.captureTime').val('');
        }).catch(function (err) {
            console.log(err);
        })
    });


}
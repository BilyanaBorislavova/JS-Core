function startApp() {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_H1A2gezHm';
    const APP_SECRET = 'd6dfd31a04884602935eb404f3a27fde';
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

    
    //NOTIFICATIONS
    $( document ).on('ajaxStart', function() {
        $("#loadingBox").show()
    });
    $( document ).on('ajaxStop', function() {
        $("#loadingBox").hide()
    });

    function showInfo(message) {
        $("#infoBox > span").text(message);
        $("#infoBox").show();
        setTimeout(function () {
            $("#infoBox").hide()
        }, 3000)
    }

    function attachBoxesEvents() {
        $('#errorBox').on('click', function () {
            $(this).hide()
        });
        $('#infoBox').on('click', function () {
            $(this).hide()
        })
    }

    function showError(message) {
        $("#errorBox > span").text(message);
        $("#errorBox").show();
        setTimeout(function () {
            $("#errorBox").hide()
        }, 3000)
    }

    function handleError(err) {
        console.log(err);
    }
    attachBoxesEvents();

    //VIEWS
    function hideAllViews() {
        $('#container > section').hide()
    }
    
    function showHideLinks() {
        showHome();
        if (sessionStorage.getItem('authtoken') === null){
            $('#flights').hide();
            $('#login').show();
            $('#register').show();
            $('#linkLogout').hide();
            $('#viewCatalog').hide();
        } else {
            $('#flights').show();
            $('#login').hide();
            $('#register').hide();
            $('#linkLogout').show();
            $('#linkLogout span').text(`Welcome, ${sessionStorage.getItem('username')} |`);
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHome() {
        hideAllViews();
        listFlights();
    }

    function showRegister() {
        hideAllViews();
        showView('viewRegister');
    }

    function showLogin() {
        hideAllViews();
        showView('viewLogin');
    }

    function showAddFlight() {
        hideAllViews();
        showView('viewAddFlight');
    }

    function showMyFlights() {
        hideAllViews();
        showView('viewMyFlights');
        viewMyFlights()
    }
    
    //USER FUNCTIONS
    function signInUser(res, message) {
        saveAuthInSession(res);
        showHideLinks();
        showHome();
        showInfo(message)
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('acl', userInfo._acl.creator);
        console.log(userInfo._acl.creator);
    }

    //ATTACH EVENTS
    function attachEvents() {
        $('#home').on('click', showHome);
        $('#register').on('click', showRegister);
        $('#login').on('click', showLogin);

        $('.register').on('click', registerUser);
        $('.log-out').on('click', logout);
        $('.login').on('click', login);

        $('.add-flight').on('click', showAddFlight);
        $('#viewAddFlight .create').on('click', addFlight);
        $('.save-changes').on('click', editFlight);
        $('#flights').on('click', showMyFlights)
    }


    //AJAX
    function registerUser(event) {
        event.preventDefault();
        let username = $('#formRegister input[name="username"]').val();
        let password = $('#formRegister input[name="pass"]').val();
        let checkPass = $('#formRegister input[name="checkPass"]').val();

        if(username.length >= 5 && password && checkPass && password === checkPass) {
            $.ajax({
                method: "POST",
                url: BASE_URL + 'user/' + APP_KEY + '/',
                headers: AUTH_HEADERS,
                data: {username, password}
            }).then(function (res) {
                signInUser(res, 'User registration successful.');
                $('#formRegister').trigger('reset');
            }).catch(handleError)
        } else if (username.length < 5){
            showError('Username should be at least 5 characters long.')
        } else if (!password){
            showError('Password cannot be an empty string.')
        } else if (password !== checkPass){
            showError('Passwords do not match.')
        }
    }
    
    function login(event) {
        event.preventDefault();
        let username = $('#formLogin input[name="username"]').val();
        let password = $('#formLogin input[name="pass"]').val();
        if(!username || !password){
            showError('Invalid username or password')
        } else {
            $.ajax({
                method: 'POST',
                url: BASE_URL + 'user/' + APP_KEY + '/login',
                headers: AUTH_HEADERS,
                data: {username, password}
            }).then(function (res) {
                signInUser(res, 'Login successful.');
                $('#formLogin').trigger('reset')
            }).catch(handleError);
        }
    }
    
    function logout() {
        $.ajax({
            method: 'POST',
            url: BASE_URL +  'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).catch(function (err) {
            console.log(err)
        });
        sessionStorage.clear();
        showInfo("Logout successful");
        showHome();
        showHideLinks()
    }

    function addFlight(event) {
        event.preventDefault()
        let destination = $('#formAddFlight input[name="destination"]').val();
        let origin = $('#formAddFlight input[name="origin"]').val();
        let departureDate = $('#formAddFlight input[name="departureDate"]').val();
        let departureTime = $('#formAddFlight input[name="departureTime"]').val();
        let seats = $('#formAddFlight input[name="seats"]').val();
        let cost = $('#formAddFlight input[name="cost"]').val();
        let img = $('#formAddFlight input[name="img"]').val();
        let isPublic = $('#formAddFlight input[type=checkbox]').is(':checked');

        if(destination && origin && seats > 0 && cost > 0) {
            $.ajax({
                method: "POST",
                url: BASE_URL + 'appdata/' + APP_KEY + '/flights',
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
                data: {destination, origin, departureDate, departureTime, seats, cost, img, isPublic}
            }).then(function (res) {
                showHome();
                $('#formAddFlight').trigger('reset');
                showInfo('Created flight.')
            }).catch(handleAjaxError)
        } else if(!destination || !origin){
            showError('Destination and origin cannot be empty!')
        } else if(seats <= 0){
            showError('Seats cannot be a negative number!')
        } else if(cost <= 0){
            showError('Cost cannot be a negative number!')
        }
    }

    function listFlights() {
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/flights?query={"isPublic":"true"}',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            displayFlights(res)
        }).catch(handleError);
    }

    function displayFlights(flights) {
        $('#viewCatalog div').empty();
        for (let flight of flights) {
            let a = $(`<a href="" class="added-flight">`).on('click', function (event) {
                event.preventDefault();
                flightDetails(flight)
            })
                .append($('<img>').attr('src', `${flight.img}`).addClass('picture-added-flight'))
                .append($('<h3>').text(`${flight.destination}`))
                .append($('<span>').text(`from ${flight.origin}`))
                .append($('<span>').text(`${flight.departureDate}`));
            $('#viewCatalog div').append(a);
        }
        showView('viewCatalog');
    }
    
    function flightDetails(flight) {
        hideAllViews();
        $('#viewFlightDetails').empty();
        let div = $('<div class="ticket-area">');
        div.append($('<div class="ticket-area-left">').append($('<img>').attr('src', `${flight.img}`)));
        div.append($('<div class="ticket-area-right">').append($('<h3>').text(`${flight.destination}`)).append($('<div>').text(`from ${flight.origin}`)));
        if(flight._acl.creator === sessionStorage.getItem('acl')){
            div.append($('<div class="data-and-time">').text(`${flight.departureDate} ${flight.departureTime}`).append($('<a href="" class="edit-flight-detail">').on('click', function (event) {
                event.preventDefault();
                loadEditFlight(flight);
            })));
        } else {
            div.append($('<div class="data-and-time">').text(`${flight.departureDate} ${flight.departureTime}`));
        }

        div.append($('<div>').text(`${flight.seats} (${flight.cost})`));
        $('#viewFlightDetails').append(div);
        showView('viewFlightDetails');
    }

    function loadEditFlight(flight) {
        console.log(flight);
        hideAllViews();
        showView('viewEditFlight');

        $('#formEditFlight input[name="destination"]').val(flight.destination);
        $('#formEditFlight input[name="origin"]').val(flight.origin);
        $('#formEditFlight input[name="departureDate"]').val(flight.departureDate);
        $('#formEditFlight input[name="departureTime"]').val(flight.departureTime);
        $('#formEditFlight input[name="seats"]').val(flight.seats);
        $('#formEditFlight input[name="cost"]').val(flight.cost);
        $('#formEditFlight input[name="img"]').val(flight.img);
        $('#formEditFlight input[type=checkbox]').is(':checked');
    }

    function editFlight(flight) {
       let destination = $('#formEditFlight input[name="destination"]').val();
       let origin = $('#formEditFlight input[name="origin"]').val();
       let departureDate = $('#formEditFlight input[name="departureDate"]').val();
       let departureTime =  $('#formEditFlight input[name="departureTime"]').val();
       let seats =  $('#formEditFlight input[name="seats"]').val();
       let cost = $('#formEditFlight input[name="cost"]').val();
       let img =  $('#formEditFlight input[name="img"]').val();
       let isPublic =  $('#formEditFlight input[type=checkbox]').is(':checked');
       let id = $('#flightId')
        console.log(id);

        if(destination && origin && seats > 0 && cost > 0) {
            $.ajax({
                method: "PUT",
                url: BASE_URL + 'appdata/' + APP_KEY + '/flights/' + id,
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
                data: {destination, origin, departureDate, departureTime, seats, cost, img, isPublic}
            }).then(function (res) {
                flightDetails(res);
                $('#formEditFlight').trigger('reset');
                showInfo('Successfully edited flight.')
            }).catch(handleError)
        } else if(!destination || !origin){
            showError('Destination and origin cannot be empty!')
        } else if(seats <= 0){
            showError('Seats cannot be a negative number!')
        } else if(cost <= 0){
            showError('Cost cannot be a negative number!')
        }
    }

    function viewMyFlights() {
        $('#viewMyFlights div').empty();
        $.ajax({
            method: "GET",
            url: BASE_URL + 'appdata/' + APP_KEY + `/flights?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            displayMyFlights(res);
        }).catch(handleError)
    }

    function displayMyFlights(flights) {

        for (let flight of flights) {
            let div = $('<div class="flight-ticket">');
            div.append($('<div class="flight-left">').append($('<img>').attr('src', `${flight.img}`)));
            div.append($('<div class="flight-right">'));
            div.append($('<div>'));
            div.append($('<h3>').text(`${flight.destination}`)).append($('<span>').text(`${flight.departureDate}`));
            div.append($('<div>').text(`from ${flight.origin}`).append($('<span>').text(`${flight.departureTime}`)));
            div.append($('<p>').text(`${flight.seats} Seats (${flight.cost}$ per seat)`));
            div.append($('<a href="" class="remove">').text('REMOVE').on('click', function (event) {
                event.preventDefault();
                removeFlight(flight);
            }));
            div.append($('<a href="" class="details">').text('Details').on('click', function (event) {
                event.preventDefault();
                flightDetails(flight);
            }));
            $('#viewMyFlights').append(div);
        }

    }

    function removeFlight(flight) {
        $.ajax({
            method: "DELETE",
            url: BASE_URL + 'appdata/' + APP_KEY + '/flights/' + flight._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
        }).then(function (res) {
            showMyFlights();
            showInfo('Flight deleted.')
        }).catch(handleAjaxError)
    }


    showHideLinks();
    attachEvents();
}
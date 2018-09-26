function startApp() {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_ry26SXPNX';
    const APP_SECRET = '2e6454bfb2394c9e8a0309ae73e663b4';
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

    function showHideMenuLinks() {
        $('#linkHome').show();
        if (sessionStorage.getItem('authtoken') === null) { // No logged in user
            $("#viewHome").show();
            $('#viewAds').hide();
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
            $('#loggedInUser').hide();
        } else { // We have logged in user
            $('#viewAds').hide();
            $("#viewHome").show();
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
            $('#loggedInUser').text(`Welcome, ${sessionStorage.getItem('username')}!`);
            $('#loggedInUser').show();
          //$("table tr:nth-child(2)").remove();
            $('<div>').text("Image:").append($('<div>').append($('<input img>').attr('name', 'image').attr('type','src'))).insertBefore($('#buttonCreateAd'));
            //$('<div>').text("Image:").append($('<div>').append($('<input img>').attr('name', 'image').attr('type','src'))).insertBefore($('#buttonEditAd'));
        }
    }

    function signInUser(res, message) {
        saveAuthInSession(res);
        showHideMenuLinks();
        showHomeView();
        showInfo(message)
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('acl', userInfo._acl.creator);
        console.log(userInfo._acl.creator);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(function() {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function showError(errorMsg) {
        let errorBox = $('#errorBox');
        errorBox.text("Error: " + errorMsg);
        errorBox.show()
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
      // if (sessionStorage.getItem('userId') === null) {
         showView('viewHome')
     // } else {
     //     showView('viewAds');
     // }
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset')
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister')
    }
    
    function showCreateAdvertisements() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd')
    }

    function showDetailedAd() {
        showView('viewDetailsAd')
    }
    
   function attachEvents() {
       $("#linkHome").on('click', showHomeView);
       $("#linkLogin").on('click', showLoginView);
       $("#linkRegister").on('click', showRegisterView);
       $("#linkListAds").on('click', listAdvertisements);
       $("#linkCreateAd").on('click', showCreateAdvertisements);
       $("#linkLogout").on('click', logoutUser);

       $("#buttonRegisterUser").on('click', registerUser);
       $("#buttonLoginUser").on('click', loginUser);
       $("#buttonCreateAd").on('click', createAd);
       $("#buttonEditAd").on('click', editAd);
        $("form").on('submit', function(event) { event.preventDefault() });

       $("#infoBox, #errorBox").on('click', function() {
           $(this).fadeOut()
       });

       $(document).on({
           ajaxStart: function() { $("#loadingBox").show() },
           ajaxStop: function() { $("#loadingBox").hide() }
       })
   }

   attachEvents();

    function handleAjaxError(response) {
        console.log(response);
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg)
    }

   function registerUser() {
        let username = $('#formRegister input[name="username"]').val();
        let password = $('#formRegister input[name="passwd"]').val();
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Registration successful.')
        }).catch(handleAjaxError)
   }

   function loginUser() {
       let username = $('#formLogin input[name="username"]').val();
       let password = $('#formLogin input[name="passwd"]').val();

       $.ajax({
           method: "POST",
           url: BASE_URL + 'user/' + APP_KEY + '/login',
           headers: AUTH_HEADERS,
           data: {username, password}
       }).then(function (res) {
           signInUser(res, 'Login successful.');
       }).catch(handleAjaxError)
   }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            sessionStorage.clear();
            showHomeView();
            showHideMenuLinks();
            showInfo('Logout successful.')
        }).catch(handleAjaxError);
    }

    function createAd() {
        let title = $('#formCreateAd input[name="title"]').val();
        let description = $('#formCreateAd textarea[name="description"]').val();
        let date = $('#formCreateAd input[name="datePublished"]').val();
        let price = $('#formCreateAd input[name="price"]').val();
        let publisher = sessionStorage.getItem('username');
        let image = $('#formCreateAd input[name="image"]').val();

        $.ajax({
            method: "POST",
            url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
            data: {title, publisher, description, date, price, image}
        }).then(function (res) {
            listAdvertisements();
            showInfo('Ad created.')
        }).catch(handleAjaxError)
    }

    function listAdvertisements() {
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/ads',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            console.log(res.length);
            $("#ads table tr").remove();
            if(res.length === 0){
                $('#viewAds').empty();
                $('#viewAds').append($('<h1>').text('Advertisements'));
                $('#viewAds').append('No advertisements available.')
            }else {
                displayPaginationAndAds(res)
            }
        }).catch(handleAjaxError)
    }

    function editAd() {
        let title = $('#formEditAd input[name="title"]').val();
        let date = $('#formEditAd input[name="datePublished"]').val();
        let description =  $('#formEditAd textarea[name="description"]').val();
        let price = $('#formEditAd input[name="price"]').val();
        let id = $('#formEditAd input[name="id"]').val();
        let image = $('#formEditAd input[name="image"]').val();
        let publisher = sessionStorage.getItem('username');

         $.ajax({
             method: 'PUT',
             url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + id,
             headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
             data: {title, date, description, price, publisher, id, image}
         }).then(function (res) {
             listAdvertisements();
           //  showInfo('Ad edited.')
         }).catch(handleAjaxError)
    }
    
    function deleteAd(ad) {
        $.ajax({
            method: "DELETE",
            url: BASE_URL + 'appdata/' + APP_KEY + '/ads/' + ad._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
        }).then(function (res) {
            listAdvertisements();
           // showInfo('Ad deleted.')
        }).catch(handleAjaxError)
    }
    
    function loadEditAd(ad) {
        showView('viewEditAd');
        $('#formEditAd input[name="title"]').val(ad.title);
        $('#formEditAd input[name="datePublished"]').val(ad.date);
        $('#formEditAd textarea[name="description"]').val(ad.description);
        $('#formEditAd input[name="price"]').val(ad.price);
        $('#formEditAd input[name="id"]').val(ad._id);
        $('#formEditAd input[name="publisher"]').val(ad.publisher);
        console.log($('#formEditAd input[name="image"]').val(ad.image));
    }

    let section = $(`<section>`).attr('id', 'viewDetailsAd');
    function readMoreFunc(ad) {
        $('#viewDetailsAd').empty();
        let thisDiv = $('<div>').append(
        $('<br>'),
        $('<div>').append($('<img>').attr('src', `${ad.image}`)),
        $('<label>').text("Title:"),
        $('<h1>').text(ad.title),
        $('<label>').text("Description:"),
        $('<p>').text(ad.description),
        $('<label>').text('Publisher:'),
        $('<div>').text(ad.publisher),
        $('<label>').text('Date:'),
        $('<div>').text(ad.date),
       // $('<label>').text(`Views: ${ad.count}`),
    );
       section.append(thisDiv);
      $('main').append(section);
      showDetailedAd();
    }

    function displayPaginationAndAds(ads) {
        showView('viewAds');

        let trth = $(`<tr><th>Title</th>`+
            `<th>Description</th>`+
            `<th>Publisher</th>`+
            `<th>Date Published</th>`+
            `<th>Price</th>`+
            `<th>Actions</th>`
        );
        $('#ads table').append(trth);
        for (let ad of ads) {
            let td = $('<td>');

            let tr = $(`<tr><th>${ad.title}</th>`+
                `<th>${ad.description}</th>`+
                `<th>${ad.publisher}</th>`+
                `<th>${ad.date}</th>`+
                `<th>${ad.price}</th>`);

            $('#ads > table').append(tr);

            let readMore = $('<td><a href="#">[Read More]</a></td>').on('click', function () {
                readMoreFunc(ad);
            });
            td.append(readMore);
            if(ad._acl.creator === sessionStorage.getItem('acl')){

                let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                    deleteAd(ad)
                });
                let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                    loadEditAd(ad)
                });
                td.append(aDel).append(aEdit);
            }

            tr.append(td);
        }
    }
    showHideMenuLinks();
}
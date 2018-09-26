function startApp() {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_BJe9hu8DX';
    const APP_SECRET = 'dc1a0fa176a149f9be8d7c26507ed4a0';
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
        // setTimeout(function () {
        //     $("#errorBox").hide()
        // }, 3000)
    }

    attachBoxesEvents();

    //VIEWS
    function hideAllViews() {
        $('#main').hide();
        $('#login').hide();
        $('#register').hide();
        $('#meme-feed').hide();
        $('#create-meme').hide();
        $('#edit-meme').hide();
        $('.meme-details').hide();
        $('.user-profile').hide();
    }

    function showHideLinks() {
        hideAllViews();
        if (sessionStorage.getItem('authtoken') === null){
            $('#main').show();
            $('#profile').hide();
            $('#createHome').hide();
        } else {
            $('#main').hide();
            $('#profile').show();
            $('#createHome').show();
            $('#meme-feed').show();
           // $('#carListings').hide();
           // $('#car-listings').show();
           // $('#createListings').show();
           // $('#profile').show();
           // $('#myListings').show();
            $('#welcm').text(`Welcome ${sessionStorage.getItem('username')}`);
            listMemes();
            console.log(`${sessionStorage.getItem('avatar')}`);
        }
    }

    //USER FUNCTIONS
    function signInUser(res, message) {
        saveAuthInSession(res);
        showHideLinks();
        showInfo(message)
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('email', userInfo.email);
        sessionStorage.setItem('avatarUrl', userInfo.avatarUrl);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('acl', userInfo._acl.creator);
        console.log(userInfo);
    }

    function handleAjaxError(response) {
        console.log(response);
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg)
    }

    //ATTACH EVENTS
    function attachEvents() {
        $('#home').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            showHideLinks();
        });

        $('#loginButton').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#login').show();
        });

        $('#loginUser').on('click', function (event) {
            event.preventDefault();
            login(); 
        });

        $('#signIn').on('click', function () {
            event.preventDefault();
            hideAllViews();
            $('#login').show();
        });

        $('#registerButton').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#register').show();
        });

        $('#signUp').on('click', function () {
            event.preventDefault();
            hideAllViews();
            $('#register').show();
        });
        $('#registerUser').on('click', function (event) {
            event.preventDefault();
            registerUser();
        });

        $('#logout').on('click', function (event) {
            event.preventDefault();
            logout();
        });

        $('#createHome').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#create-meme').show();
        });

        $('#createBtn').on('click', function (event) {
            event.preventDefault();
            createMeme();
        });

        $('#editMemeBtn').on('click', function (event) {
            event.preventDefault();
            editMeme();
        });

        $('#myProfile').on('click', function (event) {
            event.preventDefault();
            showUserProfile();
        });

    }
    
    //AJAX
    function registerUser() {
        let username = $('#registerForm input[name="username"]').val();
        let password = $('#registerForm input[name="password"]').val();
        let checkPass = $('#registerForm input[name="repeatPass"]').val();
        let email = $('#registerForm input[name="email"]').val();
        let avatarUrl = $('#registerForm input[name="avatarUrl"]').val();
        let regexUsername = /([a-zA-Z])+/;
        let passwordRegex = /([a-zA-Z0-9]){6,}/;

        if(username.length >= 3 && regexUsername.exec(username) && password.length >= 6 && passwordRegex.exec(password) && password === checkPass) {
            $.ajax({
                method: "POST",
                url: BASE_URL + 'user/' + APP_KEY + '/',
                headers: AUTH_HEADERS,
                data: {username, password, email, avatarUrl}
            }).then(function (res) {
                $('#registerForm').trigger('reset');
                signInUser(res, 'User registration successful.');
            }).catch(handleAjaxError)
        } else if (username.length < 3){
            showError('Username should be at least 3 characters long.')
        } else if (!regexUsername.exec(username)){
            showError('Username should contain only english alphabet letters.')
        } else if(password.length < 6){
            showError('Password should be at least 6 characters long.')
        }
        else if (!passwordRegex.exec(password)){
            showError('Password should contain only english letters and digits.')
        }  else if(password !== checkPass){
            showError('Passwords do not match!')
        }
    }
    
    function login() {
        let username = $('#formLogin input[name="username"]').val();
        let password = $('#formLogin input[name="password"]').val();

        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Login successful.');
            $('#formLogin').trigger('reset')
        }).catch(handleAjaxError);

    }

    function logout() {
        $.ajax({
            method: 'POST',
            url: BASE_URL +  'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).catch(handleAjaxError);
        sessionStorage.clear();
        showInfo("Logout successful");
        showHideLinks();
    }

    function listMemes() {
        $('#memes').empty();
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/memes?query={}&sort={"_kmd.ect": -1}',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            displayMemes(res)
        }).catch(handleAjaxError);
    }

    function displayMemes(memes) {
        if(memes.length === 0){
            $('.no-memes').show();
        } else {
            $('.no-memes').hide();
            for (let meme of memes) {
                console.log(meme);
                let div = $('<div class="meme">');
                div.append($('<a href="#" class="meme-title">').text(`${meme.title}`));
                div.append($('<br>'));
                let a = $('<a href="#">');
                a.append($(`<img class="meme-image">`).attr('src', `${meme.imageUrl}`)).on('click', function (event) {
                    event.preventDefault();
                    viewDetails(meme);
                });
                div.append(a);
                let secondDiv = $('<div class="info">');
                let buttonsDiv = $('<div id="data-buttons">');

                if(meme._acl.creator === sessionStorage.getItem('acl')){
                    buttonsDiv.append($('<a href="#" class="custom-button">').text('Check Out').on('click', function (event) {
                        event.preventDefault();
                        viewDetails(meme);
                    }));
                    buttonsDiv.append($('<a href="#" class="custom-button">').text('Edit').on('click', function (event) {
                        event.preventDefault();
                        loadEditMeme(meme);
                    }));
                    buttonsDiv.append($('<a href="#" class="custom-button">').text('Delete').on('click', function (event) {
                        event.preventDefault();
                        deleteMeme(meme);
                    }));
                    buttonsDiv.append($('<a href="#" class="creator">').text(`Creator: ${meme.creator}`).on('click', function (event) {
                        event.preventDefault();
                        showUserProfile();
                    }));
                } else {
                    buttonsDiv.append($('<a href="#" class="custom-button">').text('Check Out').on('click', function (event) {
                        event.preventDefault();
                        viewDetails(meme);
                    }));
                    buttonsDiv.append($('<a href="#" class="creator">').text(`Creator: ${meme.creator}`).on('click', function (event) {
                        event.preventDefault();
                        showProfile(meme._acl.creator);
                    }));
                }

                secondDiv.append(buttonsDiv);
                secondDiv.append($('<hr>'));
                div.append(secondDiv);
                $('#memes').append(div);
            }
        }
    }

    function viewDetails(meme) {
        hideAllViews();
       $('.meme-details').show();
       $('.meme-details').empty();

        let div = $('<div class="my-meme-details">');
        div.append($('<a href="#" id="meme-title">').text(`${meme.title}`));
        div.append($('<img>').attr('src', `${meme.imageUrl}`));

        let secondDiv = $('<div class="meme-props">');
        secondDiv.append($('<h2>').text('Description'));
        secondDiv.append($('<p class="meme-description">').text(`${meme.description}`));

        let thirdDiv = $('<div class="meme-details-buttons">');
        thirdDiv.append($('<a class="meme-details-button" href="#">').text(`Created by ${meme.creator}`).on('click', function (event) {
            event.preventDefault();
            showUserProfile();
        }));

        if(meme._acl.creator === sessionStorage.getItem('acl')){
            thirdDiv.append($('<a href="#" class="meme-details-button">').text('Edit').on('click', function (event) {
                event.preventDefault();
                loadEditMeme(meme);
            }));

            thirdDiv.append($('<a href="#" class="meme-details-button">').text('Delete').on('click', function (event) {
                event.preventDefault();
                deleteMeme(meme);
            }));
        }

        div.append(secondDiv);
        div.append(thirdDiv);
        $('.meme-details').append(div);
    }
    
    function createMeme() {
        let title = $('#createMemeForm input[name="title"]').val();
        let description = $('#createMemeForm input[name="description"]').val();
        let imageUrl = $('#createMemeForm input[name="imageUrl"]').val();
        let creator = sessionStorage.getItem('username');

        if(!title){
            showError('Title is required!')
        }
        else if(title.length > 33){
            showError('Title length must not exceed 33 characters!')
        } else if(!description){
            showError('Description is required!')
        }
        else if(description.length > 450){
            showError('Description length must not exceed 450 characters!')
        } else if(description.length < 30) {
            showError('Description length should be at least 30 characters!')
        } else if(!imageUrl){
            showError('Image is required!')
        }
        else if(!imageUrl.startsWith('http')){
            showError('Image url should always start with “http”')
        } else {
            $.ajax({
                method: "POST",
                url: BASE_URL + 'appdata/' + APP_KEY + '/memes',
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
                data: {title, description, imageUrl, creator}
            }).then(function (res) {
                showInfo('Meme created.');
                showHideLinks();
                $('#createMemeForm').trigger('reset');
            }).catch(handleAjaxError)
        }
    }

    function loadEditMeme(meme) {
        hideAllViews();
        $('#edit-meme').show();
        $('#editMeme input[name="memeId"]').val(meme._id);
        $('#editMeme input[name="title"]').val(meme.title);
        $('#editMeme input[name="description"]').val(meme.description);
        $('#editMeme input[name="imageUrl"]').val(meme.imageUrl);
    }
    
    function editMeme() {
       let title = $('#editMeme input[name="title"]').val();
       let description = $('#editMeme input[name="description"]').val();
       let imageUrl =  $('#editMeme input[name="imageUrl"]').val();
       let creator = sessionStorage.getItem('username');
        let id = $('#editMeme input[name="memeId"]').val();

        if(!title){
            showError('Title is required!')
        }
        else if(title.length > 33){
            showError('Title length must not exceed 33 characters!')
        } else if(!description){
            showError('Description is required!')
        }
        else if(description.length > 450){
            showError('Description length must not exceed 450 characters!')
        } else if(description.length < 30) {
            showError('Description length should be at least 30 characters!')
        } else if(!imageUrl){
            showError('Image is required!')
        }
        else if(!imageUrl.startsWith('http')){
            showError('Image url should always start with “http”')
        } else {
            $.ajax({
                method: "PUT",
                url: BASE_URL + 'appdata/' + APP_KEY + '/memes/' + id,
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
                data: {title, description, imageUrl, creator}
            }).then(function (res) {
                showInfo(`Meme ${title} updated.`);
                showHideLinks();
                $('#createMemeForm').trigger('reset');
            }).catch(handleAjaxError)
        }
    }
    
    function deleteMeme(meme) {
        $.ajax({
            method: "DELETE",
            url: BASE_URL + 'appdata/' + APP_KEY + '/memes/' + meme._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
        }).then(function (res) {
            showInfo('Meme deleted.');
            showHideLinks();
        }).catch(handleAjaxError)
    }

    function showUserProfile() {
        hideAllViews();
        $('.user-profile').show();
        $('.user-profile').empty();
        $('.user-profile').append($(`<img id="user-avatar-url" src="${sessionStorage.getItem('avatarUrl')}" alt="user-profile">`));
        $('.user-profile').append($('<h1>').text(`${sessionStorage.getItem('username')}`));
        $('.user-profile').append($('<h2>').text(`${sessionStorage.getItem('email')}`));
        $('.user-profile').append($('<a id="deleteUserButton" href="#">').text('DELETE USER!').on('click', function (event) {
            event.preventDefault();
            deleteUser();
        }));
        $('.user-profile').append($('<p id="user-listings-title">').text('User Memes'));

        getMyMemesListing();
    }

    function getMyMemesListing() {
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + `/memes?query={"creator":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
        }).then(function (res) {
            appendMyMemes(res);
        }).catch(handleAjaxError)
    }

    function appendMyMemes(memes) {
        if(memes.length === 0){
            $('.user-profile').append($('<p class="no-memes" style>').text('No memes in database.'))
        } else {
            let div = $('<div class="user-meme-listings">');

            for (let meme of memes) {
                let secondDiv = $('<div class="user-meme">');
                secondDiv.append($('<a href="#" class="user-meme-title">').text(`${meme.title}`));
                let a = $('<a href="#">').append($(`<img class="userProfileImage" src="${meme.imageUrl}">`));
                secondDiv.append(a);

                if(meme._acl.creator === sessionStorage.getItem('acl')){
                    let thirdDiv = $('<div class="user-memes-buttons">');
                    thirdDiv.append($('<a href="#" class="user-meme-btn">').text('Edit').on('click', function (event) {
                        event.preventDefault();
                        loadEditMeme(meme);
                    }));
                    thirdDiv.append($('<a href="#" class="user-meme-btn">').text('Delete').on('click', function (event) {
                        event.preventDefault();
                        deleteMeme(meme);
                    }));
                    secondDiv.append(thirdDiv);
                }
                div.append(secondDiv);
            }
            $('.user-profile').append(div);
        }
    }
    
    function deleteUser() {
       $.ajax({
           method: 'DELETE',
           url: BASE_URL + `user/` + APP_KEY + '/' + sessionStorage.getItem('userId') + '/',
           headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
       }).then(function (res) {
           console.log(res);
           sessionStorage.clear();
           showInfo("User deleted.");
           showHideLinks();
       }).catch(handleAjaxError)
    }

    function showProfile(userId) {
        $.ajax({
            method: "GET",
            url: BASE_URL + 'user/' + APP_KEY + '/' + userId,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            renderProfile(res);
            $.ajax({
                method: 'GET',
                url: BASE_URL + 'appdata/' + APP_KEY + `/memes?query={"creator":"${res.username}"}&sort={"_kmd.ect": -1}`,
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
            }).then(function (res) {
                appendUserMemes(res);
                console.log(res);
            }).catch(handleAjaxError)
        }).catch(handleAjaxError);
    }

    function renderProfile(res) {
        hideAllViews();
        $('.user-profile').show();
        $('.user-profile').empty();
        $('.user-profile').append($(`<img id="user-avatar-url" src="${res.avatarUrl}" alt="user-profile">`));
        $('.user-profile').append($('<h1>').text(`${res.username}`));
        $('.user-profile').append($('<h2>').text(`${res.email}`));

    }

    function appendUserMemes(res) {
        if(res.length === 0){
            $('.user-profile').append($('<p class="no-memes" style>').text('No memes in database.'))
        } else {
            let div = $('<div class="user-meme-listings">');
            $('.user-profile').append($('<p id="user-listings-title">').text('User Memes'));
            for (let meme of res) {
                let secondDiv = $('<div class="user-meme">');
                secondDiv.append($('<a href="#" class="user-meme-title">').text(`${meme.title}`));
                let a = $('<a href="#">').append($(`<img class="userProfileImage" src="${meme.imageUrl}">`));
                secondDiv.append(a);
                div.append(secondDiv);
            }
            $('.user-profile').append(div);
        }
    }

    hideAllViews();
    showHideLinks();
    attachEvents();
}


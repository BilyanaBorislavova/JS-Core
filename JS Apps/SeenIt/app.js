function startApp() {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_BJPzlDSrQ';
    const APP_SECRET = '1c57c287b199430e9bba513a1d619d9a';
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('acl', userInfo._acl.creator);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function showError(errorMsg) {
        let errorBox = $('#errorBox');
        errorBox.text("Error: " + errorMsg);
        errorBox.show()
    }

    function signInUser(res, message) {
        saveAuthInSession(res);
        showHideMenuLinks();
        showInfo(message)
    }

    function showHideMenuLinks() {
        if (sessionStorage.getItem('authtoken') === null) {
            $('#viewWelcome').show();
            $('#viewCatalog').hide();
            $('#viewSubmit').hide();
            $('#viewMyPosts').hide();
            $('#viewEdit').hide();
            $('#viewComments').hide();
            $('#menu').hide();
            $('#profile').hide();
        } else { // We have logged in user
            $('#viewWelcome').hide();
            $('#menu').show();
            $('#profile').show();
            $('#viewCatalog').hide();
            $('#viewSubmit').hide();
            $('#viewMyPosts').hide();
            $('#viewEdit').hide();
            $('#viewComments').hide();
            $('#profile span').text(sessionStorage.getItem('username'))
        }
    }
    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showViewCatalog() {
        showHideMenuLinks();
        showView('viewCatalog');
        $('#viewCatalog .posts').empty();
        listPosts();
    }

    function showViewSubmit() {
        showHideMenuLinks();
        showView('viewSubmit');
    }

    function showViewMyPosts() {
        showHideMenuLinks();
        showView('viewMyPosts');
        $('#viewMyPosts .posts').empty();
        getMyPosts();
    }
    
    function showComments() {
       showHideMenuLinks();
       showView('viewComments');
       $('#viewComments .post').empty();
    }

    function createPost() {
        let url = $('#submitForm input[name="url"]').val();
        let title = $('#submitForm input[name="title"]').val();
        let imageUrl = $('#submitForm input[name="image"]').val();
        let description = $('#submitForm input[name="comment"]').val();
        let author = sessionStorage.getItem('username');

        $.ajax({
            method: "POST",
            url: BASE_URL + 'appdata/' + APP_KEY + '/posts?query={}&sort={"_kmd.ect": -1}',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
            data: {url, title, imageUrl, description, author}
        }).then(function (res) {
            console.log(res);
            showInfo('Post created.');
            $('#submitForm').trigger('reset');
            showViewCatalog();
        }).catch(handleAjaxError)
    }

    function listPosts() {
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/posts?query={}&sort={"_kmd.ect": -1}',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            displayPosts(res)
        }).catch(handleAjaxError)
    }

    function displayPosts(posts) {
        let count = 1;
        $('#viewCatalog .posts').empty();
        for (let post of posts) {
            let article = $('<article>').addClass('post');
             article.append($('<div>').addClass('col rank').append($('<span>').text(`${count}`)));
             article.append($('<div>').addClass('col thumbnail').append($(`<a href="${post.url}">`).append($('<img>').attr('src', `${post.imageUrl}`))));
             let postContent = $('<div>').addClass('post-content');
             postContent.append($('<div>').addClass('title').append($(`<a href="${post.url}">`).text(post.title)));
             let details = $('<div>').addClass('details');
             details.append($('<div>').addClass('info').text(`submitted`));
             if(sessionStorage.getItem('userId') === post._acl.creator){
                 details.append($('<div>').addClass('controls').append($('<ul>').append($('<li>').addClass('action').append($('<a>').addClass('commentsLink').attr('href', '#').text('comments'))
                     .append($('<li>').addClass('action').append($('<a href="#" class="editLink">edit</a>').on('click', function () {
                         loadEditPost(post);
                     }))).append($('<li>').addClass('action').append($('<a href="#" class="deleteLink">delete</a>').on('click', function () {
                        removePost(post);
                        listMyPosts();
                     }))))));
             } else {
                 details.append($('<div>').addClass('controls').append($('<ul>').append($('<li>').addClass('action').append($('<a>').addClass('commentsLink').attr('href', '#').text('comments')))));
             }

             article.append(postContent);
             article.append(details);
             $('#viewCatalog .posts').append(article);
             count++;
        }

    }

    function attachEvents() {
         $('#btnRegister').on('click', registerUser);
         $('#btnLogin').on('click', loginUser);
         $("a[href$='#/logout']").on('click', logoutUser);
         $("a[href$='#/catalog']").on('click', showViewCatalog);
         $("a[href$='#/link']").on('click', showViewSubmit);
         $("a[href$='#/myposts']").on('click', showViewMyPosts);
         $('.commentsLink').on('click', showComments);
         $('#btnSubmitPost').on('click', createPost);
         $('#btnEditPost').on('click', editPost);



        $("form").on('submit', function(event) { event.preventDefault() });

        $("#infoBox, #errorBox").on('click', function() {
            $(this).fadeOut()
        });

        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        })
    }

    showHideMenuLinks();
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
        let username = $('#registerForm input[name="username"]').val();
        let password = $('#registerForm input[name="password"]').val();
        let checkPass = $('#registerForm input[name="repeatPass"]').val();

        let usernameRegex = /[a-zA-Z]{3,}/;
        let passRegex = /[a-zA-Z0-9]{6,}/;

        if(!usernameRegex.exec(username)){
            showError('Username should contain only alphabet English letters and should be at least 3 characters long.')
        } else if(!passRegex.exec(password)){
            showError('Password should contain only alphabet english letters and digits and should be at least 6 characters long.')
        } else if (password !== checkPass){
            showError('Password does not match with repeated password')
        } else {
            $.ajax({
                method: 'POST',
                url: BASE_URL + 'user/' + APP_KEY + '/',
                headers: AUTH_HEADERS,
                data: {username, password}
            }).then(function (response) {
                saveAuthInSession(response);
                signInUser(response, 'Registration successful');
                showHideMenuLinks();
                $('#registerForm').trigger('reset');
            }).catch(handleAjaxError)
        }
    }

    function loginUser() {
        let username = $('#loginForm input[name="username"]').val();
        let password = $('#loginForm input[name="password"]').val();

        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Login successful.');
            $('#loginForm').trigger('reset');
        }).catch(handleAjaxError);

    }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            sessionStorage.clear();
            showHideMenuLinks();
            showInfo('Logout successful.')
        }).catch(handleAjaxError)
    }

    function loadEditPost(post) {
        showHideMenuLinks();
        showView('viewEdit');
        $('#editPostForm input[name="url"]').val(post.url);
        $('#editPostForm input[name="title"]').val(post.title);
        $('#editPostForm input[name="image"]').val(post.image);
        $('#editPostForm textarea[name="description"]').val(post.description);
    }

    function editPost(post) {
        let url = $('#editPostForm input[name="url"]').val();
        let title = $('#editPostForm input[name="title"]').val();
        let image = $('#editPostForm input[name="image"]').val();
        let description = $('#editPostForm textarea[name="description"]').val();
        let author = sessionStorage.getItem('username');
        let id = post._id;

        $.ajax({
            method: 'PUT',
            url: BASE_URL + 'appdata/' + APP_KEY + '/posts/' + post._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
            data: {url, title, image, description, author}
        }).then(function (res) {
            console.log(res);
            showViewCatalog();
            showInfo('Post edited.')
        }).catch(handleAjaxError)
    }

    function removePost(post) {
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + 'appdata/' + APP_KEY + '/posts/' + post._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
        }).then(function () {
            showInfo("Post deleted.");
        }).catch(handleAjaxError)
    }

     function getMyPosts() {
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + `/posts?query={"author":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect":-1}`,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
        }).then(function (res) {
            listMyPosts(res);
        }).catch(handleAjaxError)
    }

    function listMyPosts(posts) {
        let count = 1;
        $('#viewMyPosts .posts').empty();
        for (let post of posts) {
            let article = $('<article>').addClass('post');
            article.append($('<div>').addClass('col rank').append($('<span>').text(`${count}`)));
            article.append($('<div>').addClass('col thumbnail').append($(`<a href="${post.url}">`).append($('<img>').attr('src', `${post.imageUrl}`))));
            let postContent = $('<div>').addClass('post-content');
            postContent.append($('<div>').addClass('title').append($(`<a href="${post.url}">`).text(post.title)));
            let details = $('<div>').addClass('details');
            details.append($('<div>').addClass('info').text(`submitted`));

                details.append($('<div>').addClass('controls').append($('<ul>').append($('<li>').addClass('action').append($('<a href="#" class="commentsLink">comments</a>').on('click', function () {
                    loadDetails(post);

                }))
                    .append($('<li>').addClass('action').append($('<a href="#" class="editLink">edit</a>').on('click', function () {
                        loadEditPost(post);
                    }))).append($('<li>').addClass('action').append($('<a href="#" class="deleteLink">delete</a>').on('click', function () {
                        removePost(post);
                    }))))));


            article.append(postContent);
            article.append(details);
            $('#viewMyPosts .posts').append(article);
            count++;
        }
    }

    function loadDetails(post) {
        $.ajax({
            method: "GET",
            url: BASE_URL + 'appdata/' + APP_KEY + '/posts/' + post._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
        }).then(function (res) {
            getCurrentPost(res);
            showComments()
        }).catch(handleAjaxError)
    }

    function getCurrentPost(post) {

    }

    function loadComments(post) {

    }
}
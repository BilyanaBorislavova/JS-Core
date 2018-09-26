const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_B1GAHapEm';
const APP_SECRET = '12a2401766fc4b5fb06b5b8c273a9a4e';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

function loginUser() {
    let username = $('#formLogin input[name="username"]').val();
    let password = $('#formLogin input[name="passwd"]').val();

    $.ajax({
        method: "POST",
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Login successful')
    }).catch(handleAjaxError)
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
        signInUser(res, 'Registration successful.');
    }).catch(handleAjaxError)
}

function listBooks() {
    $.ajax({
        method: "GET",
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
    }).then(function (res) {
        displayPaginationAndBooks(res)
    }).catch(handleAjaxError);
}


function createBook() {
    let title = $('#formCreateBook input[name="title"]').val();
    let author = $('#formCreateBook input[name="author"]').val();
    let description = $('#formCreateBook textarea[name="description"]').val();

    $.ajax({
        method: "POST",
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, author, description}
    }).then(function () {
        showInfo('Book created.');
        listBooks()
    }).catch(handleAjaxError)

}

function deleteBook(book) {

    $.ajax({
        method: "DELETE",
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
    }).then(function () {
        showInfo('Book deleted');
        listBooks();
    }).catch(handleAjaxError)

}

function loadBookForEdit(book) {
    showView('viewEditBook');
    $('#formEditBook input[name="title"]').val(book.title);
    $('#formEditBook input[name="author"]').val(book.author);
    $('#formEditBook textarea[name="description"]').val(book.description);
    $('#formEditBook input[name="id"]').val(book._id);
}

function editBook() {

     let title = $('#formEditBook input[name="title"]').val();
     let author = $('#formEditBook input[name="author"]').val();
     let description = $('#formEditBook textarea[name="description"]').val();
     let id = $('#formEditBook input[name="id"]').val();

   $.ajax({
       method: 'PUT',
       url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + id,
       headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
       data: {title, author, description}
   }).then(function () {
       listBooks();
       showInfo('Book edited.')
   }).catch(handleAjaxError)
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('userId', userInfo._id);
    sessionStorage.setItem('acl', userInfo._acl.creator);
}

function logoutUser() {
    $.ajax({
        method: "POST",
        url: BASE_URL + 'user/' + APP_KEY + '/_logout',
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        sessionStorage.clear();
        showHomeView();
        showHideMenuLinks();
        showInfo('Logout successful.')
    }).catch(handleAjaxError);
}

function signInUser(res, message) {
    saveAuthInSession(res);
    showHideMenuLinks();
    showHomeView();
    showInfo(message)
}

function displayPaginationAndBooks(books) {
    showView('viewBooks');
    $('#books table').empty();

     let trth = $(`<tr><th>Title</th>`+
         `<th>Author</th>`+
         `<th>Description</th>`+
         `<th>Actions</th>`
     );
     $('#books table').append(trth);
     for (let book of books) {
         let td = $('<td>');

         let tr = $(`<tr><td>${book.title}</td>`+
             `<td>${book.author}</td>`+
             `<td>${book.description}</td>`);

         $('#books > table').append(tr);


         if(book._acl.creator === sessionStorage.getItem('acl')){

             let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                 deleteBook(book)
             });
             let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                 loadBookForEdit(book)
             });
             td.append(aDel).append(aEdit);
         }

         tr.append(td);
     }

}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}
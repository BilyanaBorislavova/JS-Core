function startApp() {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_ByxOPaqHQ';
    const APP_SECRET = '97e14cdfdb594cc68c391e21f8424583';
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
        $('#registerForm').hide();
        $('#createCars').hide();
        $('#editCars').hide();
        $('#myCarListings').hide();
        $('#myCars').hide();
        $('#listDetails').hide();
        $('#car-listings').hide();
        $('#carListings').hide();
    }

   function showHideLinks() {
        hideAllViews();
       if (sessionStorage.getItem('authtoken') === null){
           $('#main').show();
           $('#allListings').hide();
           $('#carListings').hide();
           $('#createListings').hide();
           $('#car-listings').hide();
           $('#profile').hide();
           $('#myListings').hide();
       } else {
           $('#main').hide();
           $('#allListings').show();
           $('#carListings').hide();
           $('#car-listings').show();
           $('#createListings').show();
           $('#profile').show();
           $('#myListings').show();
           $('#welcm').text(`Welcome ${sessionStorage.getItem('username')}`);
           listCars();
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
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('acl', userInfo._acl.creator);
        console.log(userInfo._acl.creator);
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

        $('#registerButton').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#registerForm').show();
        });

        $('#registerUser').on('click', function (event) {
            event.preventDefault();
            registerUser();
        });

        $('#signUpBtn').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#registerForm').show();
        });

        $('#signInBtn').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#login').show();
        });

        $('#logout').on('click', function (event) {
            event.preventDefault();
            logout();
        });

        $('#logUserBtn').on('click', function (event) {
            event.preventDefault();
            login();
        });

        $('#allListings').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#car-listings').show();
            listCars();
        });

        $('#createListings').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#createCars').show();
        });

        $('#createBtn').on('click', function (event) {
            event.preventDefault();
            createCar();
        });
        
        $('#editHome').on('click',  function (event) {
            event.preventDefault();
           editCar();
        });

        $('#detailsEdit').on('click', function (event) {
            event.preventDefault();
            loadEditCar();
        });

        $('#myListings').on('click', function (event) {
            event.preventDefault();
            hideAllViews();
            $('#carListings').show();
            getMyCarListing();
        })
    }

    //AJAX
    function registerUser() {
        let username = $('#registerForm input[name="username"]').val();
        let password = $('#registerForm input[name="password"]').val();
        let checkPass = $('#registerForm input[name="repeatPass"]').val();
        let regexUsername = /([a-zA-Z])+/;
        let passwordRegex = /([a-zA-Z0-9]){6,}/;

        if(username.length >= 3 && regexUsername.exec(username) && password.length >= 6 && passwordRegex.exec(password) && password === checkPass) {
            $.ajax({
                method: "POST",
                url: BASE_URL + 'user/' + APP_KEY + '/',
                headers: AUTH_HEADERS,
                data: {username, password}
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

    function listCars() {
        $('#listings').empty();
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/cars?query={}&sort={"_kmd.ect": -1}',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')}
        }).then(function (res) {
            displayCars(res)
        }).catch(handleAjaxError);
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

    function displayCars(cars) {
        if(cars.length === 0){
            $('.no-cars').show();
        } else {
            $('.no-cars').hide();
            for (let car of cars) {
                let div = $('<div class="listing">');
                div.append($('<p>').text(`${car.title}`));
                div.append($('<img>').attr('src', `${car.imageUrl}`));
                div.append($('<h2>').text(`Brand: ${car.brand}`));
                let classInfo = ($('<div class="info">'));
                classInfo.append($('<div id="data-info">').append($('<h3>').text(`Seller: ${car.seller}`)).append($('<h3>').text(`Fuel: ${car.fuel}`)).append($(`<h3>`).text(`Year: ${car.year}`)).append($('<h3>').text(`Price: ${car.price}$`)));
                let dataButtons = $('<div id="data-buttons">');
                if(car._acl.creator === sessionStorage.getItem('acl')){
                    let ul = $('<ul>');
                    ul.append($('<li class="action">').append($('<a href="#" class="button-carDetails">').text('Details').on('click', function (event) {
                        event.preventDefault();
                        viewDetails(car);
                    })));
                    ul.append($('<li class="action">').append($('<a href="#" class="button-carDetails">').text('Edit').on('click',  function (event) {
                        event.preventDefault();
                        loadEditCar(car);
                    })));
                    ul.append($('<li class="action">').append($('<a href="#" class="button-carDetails">').text('Delete').on('click', function (event) {
                        event.preventDefault();
                        removeCarFromHomePage(car);
                    })));
                    dataButtons.append(ul);
                    classInfo.append(dataButtons);
                } else {
                    classInfo.append(dataButtons);
                    classInfo.append($('<div id="data-buttons">').append($('<ul>').append($('<li class="action">').append($('<a href="#" class="button-carDetails">').text('Details').on('click', function (event) {
                        event.preventDefault();
                        viewDetails(car);
                    })))))
                }
                div.append(classInfo);
                $('#listings').append(div);
            }
        }
    }
    
    function viewDetails(car) {
        hideAllViews();
        $('#listDetails').show();
         $('#listDetails').empty();
         let div = $('<div class="my-listing-details">');
         div.append($('<p id="auto-title">').text(`${car.title}`));
         div.append($('<img>').attr('src', `${car.imageUrl}`));

         let secondDiv = $('<div class="listing-props">');
         secondDiv.append($('<h2>').text(`Brand: ${car.brand}`));
         secondDiv.append($('<h2>').text(`Model: ${car.model}`));
         secondDiv.append($('<h2>').text(`Year: ${car.year}`));
         secondDiv.append($('<h2>').text(`Fuel: ${car.fuel}`));
         secondDiv.append($('<h2>').text(`Price: ${car.price}$`));
         div.append(secondDiv);
         if(car._acl.creator === sessionStorage.getItem('acl')){
             let thirdDiv = $('<div class="listings-buttons">');
             thirdDiv.append($('<a href="#" class="button-list">').text('Edit').on('click', function (event) {
                 event.preventDefault();
                 loadEditCar(car);
             }));
             thirdDiv.append($('<a href="#" class="button-list">').text('Delete').on('click', function (event) {
                 event.preventDefault();
                 removeCarFromHomePage(car);
             }));
             div.append(thirdDiv);
         }
         div.append($('<p id="description-title">').text('Description'));
         div.append($('<p id="description-para">').text(`${car.description}`));
         $('#listDetails').append(div);
    }
    
    function createCar() {
        let title = $('#createCars input[name="title"]').val();
        let description = $('#createCars input[name="description"]').val();
        let brand = $('#createCars input[name="brand"]').val();
        let model = $('#createCars input[name="model"]').val();
        let year = $('#createCars input[name="year"]').val();
        let imageUrl = $('#createCars input[name="imageUrl"]').val();
        let fuel = $('#createCars input[name="fuelType"]').val();
        let price = $('#createCars input[name="price"]').val();
        let seller = sessionStorage.getItem('username');

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
        } else if(!brand){
            showError('Brand is required!')
        }
        else if(brand.length > 11){
            showError('Brand length must not exceed 11 characters!')
        } else if(!fuel){
            showError('Fuel is required!')
        }
        else if(fuel.length > 11){
            showError('Fuel length must not exceed 11 characters!')
        } else if(!model){
            showError('Model is required!')
        } else if(model.length > 11){
            showError('Model length must not exceed 11 characters!')
        } else if(year.length !== 4){
            showError('The year must be exactly 4 characters long!')
        } else if(!price){
            showError('Price is required!')
        }
        else if(price > 1000000){
            showError('The price cannot be null or more than 1000000$!')
        } else if(!imageUrl){
            showError('Image is required!')
        }
        else if(!imageUrl.startsWith('http')){
            showError('Image url should always start with “http”')
        } else {
            $.ajax({
                method: "POST",
                url: BASE_URL + 'appdata/' + APP_KEY + '/cars',
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
                data: {title, description, brand, model, year, imageUrl, fuel, price, seller}
            }).then(function (res) {
                showInfo('Listing created.');
                showHideLinks();
                $('#createCars').trigger('reset');
            }).catch(handleAjaxError)
            }
        }

        function loadEditCar(car) {
        hideAllViews();
        $('#editCars').show();
        $('#editCars input[name="carId"]').val(car._id);
         $('#editCars input[name="title"]').val(car.title);
        $('#editCars input[name="description"]').val(car.description);
         $('#editCars input[name="brand"]').val(car.brand);
         $('#editCars input[name="model"]').val(car.model);
        $('#editCars input[name="year"]').val(car.year);
        $('#editCars input[name="imageUrl"]').val(car.imageUrl);
        $('#editCars input[name="fuelType"]').val(car.fuel);
         $('#editCars input[name="price"]').val(car.price);
        }
        
        function editCar() {
           let title = $('#editCars input[name="title"]').val();
           let description = $('#editCars input[name="description"]').val();
           let brand = $('#editCars input[name="brand"]').val();
           let model =  $('#editCars input[name="model"]').val();
           let year = $('#editCars input[name="year"]').val();
           let imageUrl = $('#editCars input[name="imageUrl"]').val();
           let fuel = $('#editCars input[name="fuelType"]').val();
           let price = $('#editCars input[name="price"]').val();
           let seller = sessionStorage.getItem('username');
            let id = $('#editCars input[name="carId"]').val();

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
            } else if(!brand){
                showError('Brand is required!')
            }
            else if(brand.length > 11){
                showError('Brand length must not exceed 11 characters!')
            } else if(!fuel){
                showError('Fuel is required!')
            }
            else if(fuel.length > 11){
                showError('Fuel length must not exceed 11 characters!')
            } else if(!model){
                showError('Model is required!')
            } else if(model.length > 11){
                showError('Model length must not exceed 11 characters!')
            } else if(year.length !== 4){
                showError('The year must be exactly 4 characters long!')
            } else if(!price){
                showError('Price is required!')
            }
            else if(price > 1000000){
                showError('The price cannot be null or more than 1000000$!')
            } else if(!imageUrl){
                showError('Image is required!')
            }
            else if(!imageUrl.startsWith('http')){
                showError('Image url should always start with “http”')
            }  else {
                $.ajax({
                    method: 'PUT',
                    url: BASE_URL + 'appdata/' + APP_KEY + '/cars/' + id,
                    headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
                    data: {title, description, brand, model, year, imageUrl, fuel, price, seller}
                }).then(function (res) {
                    showInfo(`Listing ${title} updated.`);
                    showHideLinks();
                }).catch(handleAjaxError)
            }
        }

        function removeCarFromHomePage(car) {
            $.ajax({
                method: "DELETE",
                url: BASE_URL + 'appdata/' + APP_KEY + '/cars/' + car._id,
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
            }).then(function (res) {
                showInfo('Car deleted.');
                showHideLinks();
            }).catch(handleAjaxError)
        }


        function getMyCarListing() {
            $.ajax({
                method: 'GET',
                url: BASE_URL + 'appdata/' + APP_KEY + `/cars?query={"seller":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`,
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')},
            }).then(function (res) {
                hideAllViews();
                appendMyCars(res);
            }).catch(handleAjaxError)
        }

        function appendMyCars(cars) {
        $('#carListings').show();
            $('#myCars').empty();
            if(cars.length === 0){
               $('#myCars').append($('<p class="no-cars">').text(" No cars in database."))
            } else {

                for (let car of cars) {
                    let div = $('<div class="my-listing">');
                    div.append($('<p id="listing-title">').text(`${car.title}`));
                    div.append($('<img>').attr('src', `${car.imageUrl}`));

                    let secondDiv = $('<div class="listing-props">');
                    secondDiv.append($('<h2>').text(`Brand: ${car.brand}`));
                    secondDiv.append($('<h3>').text(`Model: ${car.model}`));
                    secondDiv.append($('<h3>').text(`Year: ${car.year}`));
                    secondDiv.append($('<h3>').text(`Price: ${car.price}`));

                    let thirdDiv = $('<div class="my-listing-buttons">');
                    thirdDiv.append($('<a href="#" class="my-button-list">').text('Details').on('click', function () {
                        viewDetails(car);
                    }));
                    thirdDiv.append($('<a href="#" class="my-button-list">').text('Edit').on('click', function () {
                        loadEditCar(car);
                    }));
                    thirdDiv.append($('<a href="#" class="my-button-list">').text('Delete').on('click', function () {
                        removeCarFromHomePage(car);
                    }));
                    div.append(secondDiv);
                    div.append(thirdDiv);
                    $('#myCars').append(div);
                }
            }
            $('#myCars').show();
        }

    showHideLinks();
    attachEvents();
}
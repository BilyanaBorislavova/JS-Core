$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken');
            context.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs')
            }).catch(auth.handleError)
        });

        this.get('#/about', function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken');
            context.username = sessionStorage.getItem('username');
                        this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs')
            }).catch(auth.handleError)
        });

        this.get('#/login', function (context) {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs')
            }).catch(auth.handleError)
        });

        this.get('#/register', function (context) {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs')
            }).catch(auth.handleError)
        });

        this.get('#/catalog', function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken');
            context.username = sessionStorage.getItem('username');
            context.teams = teamsService.loadTeams();

                this.loadPartials({
                    header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                team: './templates/catalog/team.hbs',
            }).then(function () {
                this.partial('./templates/catalog/teamCatalog.hbs')
            }).catch(auth.handleError)
        });

        this.get('#/create', function (context) {
            context.loggedIn = sessionStorage.getItem('authtoken');
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs')
            }).catch(auth.handleError)
            
        });

        this.get('#/logout', function (context) {
            auth.logout().then(function () {
                sessionStorage.clear();
                auth.showInfo('Logged out successfully!');
                context.redirect('#/home');
            }).catch(auth.handleError)
        });

        this.get(`#/edit/:${sessionStorage.getItem('teamId')}`, function () {
            context.loggedIn = sessionStorage.getItem('authtoken');
            context.username = sessionStorage.getItem('username');

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                editForm: './templates/edit/editForm.hbs'
            }).then(function () {
                this.partial('./templates/create/editPage.hbs')
            }).catch(auth.handleError)
        });
        
        this.post('#/register', function (context) {
            let username = context.params.username;
            let password = context.params.password;
            let repeatPassword = context.params.repeatPassword;

             if(password === repeatPassword){
               auth.register(username, password)
                   .then(function (data) {
                   auth.saveSession(data);
                   auth.showInfo('Registered successfully!');
                   context.redirect('#/home')
               }).catch(auth.handleError)
             } else {
                 auth.showError('Passwords do not match')
             }
        });
        
        this.post('#/login', function (context) {
            let username = context.params.username;
            let password = context.params.password;
            
            auth.login(username, password)
                .then(function (data) {
                    auth.saveSession(data);
                    auth.showInfo('Logged in successfully!');
                    context.redirect('#/home')
                }).catch(auth.handleError)
        });

        this.post('#/create', function (context) {
            let name = context.params.name;
            let comment = context.params.comment;
            teamsService.createTeam(name, comment)
                .then(function (c) {
                    auth.saveSession(c);
                    teamsService.joinTeam(c._id);
                    auth.showInfo('Team created!');
                    context.redirect('#/catalog')
                }).catch(auth.handleError)
        })


    });

    app.run();
});
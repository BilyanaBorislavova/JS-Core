const app = Sammy('#main', function () {
   this.get('#/index.html', () => {
       this.swap('<h2>Index</h2>')
   });

    this.get('#/about', () => {
        this.swap('<h2>About</h2>')
    });

    this.get('#/contact', () => {
        this.swap('<h2>Contact</h2>')
    });

});

$(() => {
   app.run();
});
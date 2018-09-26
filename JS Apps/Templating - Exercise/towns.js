function attachEvents() {
    let template = $('#towns-template').html();
    let compile = Handlebars.compile(template);

    $('#btnLoadTowns').on('click', function () {
        let t = $('#towns').val().split(", ");
        let towns = [];
        for (let obj of t) {
            towns.push({town:obj});
        }
        let res = compile({towns});
        $('#root').append(res);
        $('#towns').val('');
    });

}
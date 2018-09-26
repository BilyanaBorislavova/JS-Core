function domSearch(selector, bool) {
    let div = $('<div>');
    div.addClass('add-controls');
    div.append(('<label>Enter text: <input id="enteredVal"> <a class="button" style="display: inline-block">Add</a> '));
    div.appendTo(selector);

    let searchDiv = $('<div>');
    searchDiv.addClass('search-controls');
    searchDiv.append('<label>Search: <input id="valToSearchFor">');
    searchDiv.appendTo(selector);

    let resultDiv = $('<div>');
    resultDiv.addClass('result-controls');
    resultDiv.append($('<ul class="items-list">'));
    $('.button').on('click', function () {
        let value = $('#enteredVal').val();
        resultDiv.append(`<li class="list-item"><a class="button" id="btn" onclick="$(this).closest($('.list-item')).remove()">X</a><strong>${value}</strong></li>`);
        resultDiv.appendTo(selector);
        $('#enteredVal').val('');
    });


    let searchText = $('#valToSearchFor').val();
    let match = $(`.lis li:contains('${searchText}')`);















}
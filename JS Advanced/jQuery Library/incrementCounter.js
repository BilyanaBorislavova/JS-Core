function increment(selector) {
    let textArea = $('<textarea>');
    textArea.addClass('counter');
    textArea.val('0');
    textArea.attr("disabled", "disabled");
    textArea.appendTo(selector);

    let incrementButton = $('<button>');
    incrementButton.addClass('btn');
    incrementButton.attr("id", "incrementBtn");
    incrementButton.text("Increment");
    incrementButton.appendTo(selector);

    let addButton = $('<button>');
    addButton.addClass('btn');
    addButton.attr("id", "addBtn");
    addButton.text("Add");
    addButton.appendTo(selector);

    let ul = $('<ul>');
    ul.addClass('results');
    ul.appendTo(selector);
    
    incrementButton.on('click', function () {
       let incrementValue = ($('.counter').val());
       incrementValue++;
       $('.counter').val(incrementValue);
    });
    
    addButton.on('click', function () {
        let currentValue = ($('.counter').val());
        $('.results').append(`<li>${currentValue}</li>`);
    })
}
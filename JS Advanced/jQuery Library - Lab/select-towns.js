function attachEvents() {
    $('#items').on('click', 'li',function () {
        let element = $(this);
        $('#selectedTowns').append(element.text());

    });
}
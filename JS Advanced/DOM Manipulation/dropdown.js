function addItem() {
    let inputText = $('#newItemText').val();
    let inputValue = $('#newItemValue').val();
    let option = $('<option/>');
    option.text(inputText);
    option.val(inputValue);
    $('#menu').append(option);
    $('#newItemText').val('');
    $('#newItemValue').val('');
}
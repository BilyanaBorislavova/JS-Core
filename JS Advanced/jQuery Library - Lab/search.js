function search() {
    let value = $('#searchText').val();
    let arr = $(`#towns li:contains('${value}')`);
    $('#towns li').css('font-weight', '');
    arr.css('font-weight', 'bold');
    $('#result').text(`${arr.length} matches found.`)
}
function addDestination() {
    let city = $('.inputData:first').val();
    let country = $('.inputData').eq(1).val();
    let season = $('#seasons option:selected').text();

    if(city !== '' && country !== '') {
        let tr = $('<tr>');
        tr.append($('<td>').text(`${city}, ${country}`));
        tr.append($('<td>').text(`${season}`));
        $('#destinationsList').append(tr);
    }

    if(season === 'Summer'){
        let sValue = Number($('#summer').val());
        sValue++;
        Number($('#summer').val(sValue));
    } else if(season === 'Spring'){
        let sValue = Number($('#spring').val());
        sValue++;
        Number($('#spring').val(sValue));
    } else if(season === 'Autumn'){
        let aValue = Number($('#autumn').val());
        aValue++;
        Number($('#autumn').val(aValue));
    } else if(season === 'Winter'){
        let wValue = Number($('#winter').val());
        wValue++;
        Number($('#winter').val(wValue));
    }


    $('.inputData:first').val('');
    $('.inputData').eq(1).val('');
}
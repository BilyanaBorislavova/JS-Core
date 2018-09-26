function attachEvents() {
    $('#submit').on('click', function () {
        let location = $('#location').val();
        let url = 'https://judgetests.firebaseio.com/locations.json';

        $.ajax({
            method: "GET",
            url: url
        }).then(function (arr) {
            let filteredArr = arr.filter(a => a.name === location)[0];
            let currentLocation = filteredArr.name;
            let currentCode = filteredArr.code;

            for (let loc in arr) {
                let existLoc = arr[loc]['name'];

                if(existLoc.includes(currentLocation)){
                    $('#forecast').css('display', 'block');
                }
            }

            $.ajax({
                method: "GET",
                url: `https://judgetests.firebaseio.com/forecast/today/${currentCode}.json `
            }).then(function (info) {
                let currCondition = info['forecast']['condition'];
                let currLoc = info['name'];
                let highCurrDegrees = info['forecast']['high'];
                let lowCurrDegrees = info['forecast']['low'];

                let symbol = '';
                let degrees = '°';

                if(currCondition === 'Sunny'){
                    symbol = '☀';
                } else if (currCondition === 'Partly sunny'){
                    symbol = '⛅';
                } else if(currCondition === 'Overcast'){
                    symbol = '☁';
                } else if(currCondition === 'Rain'){
                    symbol = '☂';
                }

                let span = $('<span>').text(symbol).addClass('condition symbol');
                let secondSpan = $('<span>');
                secondSpan.addClass('condition');
                secondSpan.append($('<span>').addClass('forecast-data').text(currLoc));
                secondSpan.append($('<span>').addClass('forecast-data').text(`${lowCurrDegrees}${degrees}/${highCurrDegrees}${degrees}`));
                secondSpan.append($('<span>').addClass('forecast-data').text(currCondition));
                $('#current').append(span);
                $('#current').append(secondSpan)
            }).catch(function (err) {
                console.log(err);
            });

            $.ajax({
                method: "GET",
                url: `https://judgetests.firebaseio.com/forecast/upcoming/${currentCode}.json `
            }).then(function (info) {
                for (let weather of info['forecast']) {
                    let condition = weather['condition'];
                    let high = weather['high'];
                    let low = weather['low'];

                    let symbol = '';
                    let degrees = '°';

                    if(condition === 'Sunny'){
                        symbol = '☀';
                    } else if (condition === 'Partly sunny'){
                        symbol = '⛅';
                    } else if(condition === 'Overcast'){
                        symbol = '☁';
                    } else if(condition === 'Rain'){
                        symbol = '☂';
                    }

                    let span = $('<span>').addClass('upcoming');
                    span.append($('<span>').addClass('symbol').text(symbol));
                    span.append($('<span>').addClass('forecast-data').text(`${low}${degrees}/${high}${degrees}`));
                    span.append($('<span>').addClass('forecast-data').text(condition));
                    $('#upcoming').append(span);
                }
            }).catch(function (err) {
                console.log(err);
            })

        }).catch(function (err) {
            console.log(err);
        })
    })
}
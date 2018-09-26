function attachEventsListeners() {
    let daysInput = $('#days');
    let hoursInput = $('#hours');
    let minutesInput = $('#minutes');
    let secondsInput = $('#seconds');

    $('#daysBtn').on('click', function () {
        if(daysInput.val() !== ''){
            hoursInput.val(daysInput.val() * 24);
            minutesInput.val(daysInput.val() * 1440);
            secondsInput.val(daysInput.val() * 86400);
        }
    });

    $('#hoursBtn').on('click', function () {
        if(hoursInput.val() !== ''){
            daysInput.val((hoursInput.val() * 0.0416667));
            minutesInput.val((hoursInput.val() * 60.000048));
            secondsInput.val((hoursInput.val() * 3600.00288));
        }
    });

    $('#minutesBtn').on('click', function () {
        if(minutesInput.val() !== ''){
            daysInput.val((minutesInput.val() * 0.000694445));
            hoursInput.val((minutesInput.val() * 0.01666668));
            secondsInput.val((minutesInput.val() * 60.000048));
        }
    });

    $('#secondsBtn').on('click', function () {
        if(secondsInput.val() !== ''){
            daysInput.val((secondsInput.val() * 1.1574083333e-5));
            hoursInput.val((secondsInput.val() * 0.00027777799999200000671));
            minutesInput.val((secondsInput.val() * 0.0166666799995199982));
        }
    })

}

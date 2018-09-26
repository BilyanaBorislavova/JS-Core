function timer() {

    let seconds = 0;
    let minutes = 0;
    let interval;
    let increment = false;

    $('#start-timer').on('click', function () {
        if(!increment){
            increment = true;
            interval = setInterval(incrementer, 1000);
        }
        
        function incrementer() {
            seconds++;
            if(seconds % 60 === 0){
                minutes++;
            }

            $('#hours').text(("0" + Math.floor(minutes / 60).slice(-2)));
            $('#minutes').text(("0" + (minutes % 60).slice(-2)));
            $('#seconds').text(("0" + (seconds % 60).slice(-2)));
        }

    });

    $('#stop-timer').on('click', function () {

    });
}
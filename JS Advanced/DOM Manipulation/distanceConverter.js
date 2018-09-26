function attachEventsListeners() {
    let numberToConvert = $('#inputDistance');

    $('#convert').on('click', function () {
        let inputUnit = $('#inputUnits').val();
        let outputUnit = $('#outputUnits').val();

        if(inputUnit === 'km'){
            if(outputUnit === 'm'){
               $('#outputDistance').val(numberToConvert.val() * 1000);
            } else if(outputUnit === 'cm'){
                $('#outputDistance').val(numberToConvert.val() * 100000);
            } else if(outputUnit === 'mm'){
                $('#outputDistance').val(numberToConvert.val() * 1000000);
            } else if(outputUnit === 'mi'){
                $('#outputDistance').val(numberToConvert.val() * 0.621371192);
            } else if(outputUnit === 'yrd'){
                $('#outputDistance').val(numberToConvert.val() * 1093.6133);
            } else if(outputUnit === 'ft'){
                $('#outputDistance').val(numberToConvert.val() * 3280.8399);
            } else if(outputUnit === 'in'){
                $('#outputDistance').val(numberToConvert.val() * 39370.0787);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        } else if(inputUnit === 'm'){
            if(outputUnit === 'km'){
                $('#outputDistance').val(numberToConvert.val() * 0.001);
            } else if(outputUnit === 'cm'){
                $('#outputDistance').val(numberToConvert.val() * 100);
            } else if(outputUnit === 'mm'){
                $('#outputDistance').val(numberToConvert.val() * 1000);
            } else if(outputUnit === 'mi'){
                $('#outputDistance').val(numberToConvert.val() * 0.000621371192);
            } else if(outputUnit === 'yrd'){
                $('#outputDistance').val(numberToConvert.val() * 1.0936133);
            } else if(outputUnit === 'ft'){
                $('#outputDistance').val(numberToConvert.val() * 3.2808399);
            } else if(outputUnit === 'in'){
                $('#outputDistance').val(numberToConvert.val() * 39.3700787);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        } else if(inputUnit === 'cm'){
            if(outputUnit === 'km'){
                $('#outputDistance').val((numberToConvert.val() * 0.01) * 0.001);
            } else if(outputUnit === 'm'){
                $('#outputDistance').val(numberToConvert.val() * 0.01);
            } else if(outputUnit === 'mm'){
                $('#outputDistance').val(numberToConvert.val() * 10);
            } else if(outputUnit === 'mi'){
                $('#outputDistance').val((numberToConvert.val()* 0.01) * 0.000621371);
            } else if(outputUnit === 'yrd'){
                $('#outputDistance').val(numberToConvert.val() * 0.010936133);
            } else if(outputUnit === 'ft'){
                $('#outputDistance').val(numberToConvert.val() * 0.032808399);
            } else if(outputUnit === 'in'){
                $('#outputDistance').val(numberToConvert.val() * 0.393700787);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        } else if(inputUnit === 'mm'){
            if(outputUnit === 'km'){
                $('#outputDistance').val(numberToConvert.val() / 1000000);
            } else if(outputUnit === 'm'){
                $('#outputDistance').val(numberToConvert.val() * 0.001);
            } else if(outputUnit === 'cm'){
                $('#outputDistance').val(numberToConvert.val() * 0.1);
            } else if(outputUnit === 'mi'){
                $('#outputDistance').val(numberToConvert.val() / 1609344.01);
            } else if(outputUnit === 'yrd'){
                $('#outputDistance').val(numberToConvert.val() * 0.0010936133);
            } else if(outputUnit === 'ft'){
                $('#outputDistance').val(numberToConvert.val() * 0.003280839);
            } else if(outputUnit === 'in'){
                $('#outputDistance').val(numberToConvert.val() * 0.0393700787);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        } else if(inputUnit === 'mi'){
            if(outputUnit === 'km'){
                $('#outputDistance').val(numberToConvert.val() * 1.609344);
            } else if(outputUnit === 'm'){
                $('#outputDistance').val(numberToConvert.val() * 1609.344);
            } else if(outputUnit === 'cm'){
                $('#outputDistance').val(numberToConvert.val() * 160934.4);
            } else if(outputUnit === 'mm'){
                $('#outputDistance').val(numberToConvert.val() * 1609344);
            } else if(outputUnit === 'yrd'){
                $('#outputDistance').val(numberToConvert.val() * 1760);
            } else if(outputUnit === 'ft'){
                $('#outputDistance').val(numberToConvert.val() * 5280);
            } else if(outputUnit === 'in'){
                $('#outputDistance').val(numberToConvert.val() * 63360);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        } else if (inputUnit === 'yrd'){
            if(outputUnit === 'km'){
                $('#outputDistance').val(numberToConvert.val() * 0.0009144);
            } else if(outputUnit === 'm'){
                $('#outputDistance').val(numberToConvert.val() * 0.9144);
            } else if(outputUnit === 'cm'){
                $('#outputDistance').val(numberToConvert.val() * 91.44);
            } else if(outputUnit === 'mm'){
                $('#outputDistance').val(numberToConvert.val() * 914.4);
            } else if(outputUnit === 'mi'){
                $('#outputDistance').val(numberToConvert.val() * 0.000568181818);
            } else if(outputUnit === 'ft'){
                $('#outputDistance').val(numberToConvert.val() * 3);
            } else if(outputUnit === 'in'){
                $('#outputDistance').val(numberToConvert.val() * 36);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        } else if (inputUnit === 'ft'){
            if(outputUnit === 'km'){
                $('#outputDistance').val(numberToConvert.val() * 0.0003048);
            } else if(outputUnit === 'm'){
                $('#outputDistance').val(numberToConvert.val() * 0.3048);
            } else if(outputUnit === 'cm'){
                $('#outputDistance').val(numberToConvert.val() * 30.48);
            } else if(outputUnit === 'mm'){
                $('#outputDistance').val(numberToConvert.val() * 304.8);
            } else if(outputUnit === 'mi'){
                $('#outputDistance').val(numberToConvert.val() * 0.000189393939);
            } else if(outputUnit === 'yrd'){
                $('#outputDistance').val(numberToConvert.val() * 0.333333333);
            } else if(outputUnit === 'in'){
                $('#outputDistance').val(numberToConvert.val() * 12);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        } else if (inputUnit === 'in'){
            if(outputUnit === 'km'){
                $('#outputDistance').val(numberToConvert.val() / 39370.08);
            } else if(outputUnit === 'm'){
                $('#outputDistance').val(numberToConvert.val() * 0.0254);
            } else if(outputUnit === 'cm'){
                $('#outputDistance').val(numberToConvert.val() * 2.54);
            } else if(outputUnit === 'mm'){
                $('#outputDistance').val(numberToConvert.val() * 25.4);
            } else if(outputUnit === 'mi'){
                $('#outputDistance').val(numberToConvert.val() / 63360.00);
            } else if(outputUnit === 'yrd'){
                $('#outputDistance').val(numberToConvert.val() * 0.0277777778);
            } else if(outputUnit === 'ft'){
                $('#outputDistance').val(numberToConvert.val() * 0.0833333333);
            } else {
                $('#outputDistance').val(numberToConvert.val());
            }
        }
    })


}
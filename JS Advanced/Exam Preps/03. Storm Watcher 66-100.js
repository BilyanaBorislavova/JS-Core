 class StormWatcher {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = 0;
        }

        incrementValue(){
           return this.id += 1
        }

        toString() {
            let weather = '';
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                weather = 'Stormy';
            } else {
                weather = 'Not stormy';
            }

            let result = '';
                result += `Reading ID: ${this.incrementValue()}\n`;
                result += `Temperature: ${this.temperature}*C\n`;
                result += `Relative Humidity: ${this.humidity}%\n`;
                result += `Pressure: ${this.pressure}hpa\n`;
                result += `Wind Speed: ${this.windSpeed}m/s\n`;
                result += `Weather: ${weather}`;
                return result;
            }
 }






let record1 = new StormWatcher(32, 66, 760, 12).toString();
console.log(record1);

let record2 = new StormWatcher(10, 40, 680, 30);
let report2 = record2.toString();
console.log(report2);

let record3 = new StormWatcher(10, 40, 680, 30);
let report3 = record2.toString()
console.log(report3);
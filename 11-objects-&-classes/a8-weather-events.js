class WeatherEvent{
    constructor(timestamp){
        this.timestamp = timestamp;
    }
    
    getInformation(){
        return "";
    }

    print(){

        const value = this.getInformation()
        console.log(this.timestamp + " " + value)
    }

}

class TemperatureChangeEvent extends WeatherEvent {
    constructor(timestamp, temperature) {
        super(timestamp);
        this.temperature = temperature;   
    }  

    getInformation(){
        return this.temperature + ": temperature value °C";
    }
}


class HumidityChangeEvent extends WeatherEvent {
    constructor(timestamp, humidity) {
        super(timestamp);
        this.humidity = humidity;   
    }  

    getInformation(){
        return this.humidity + ": humidity value %";
    }

}

class WindStrengthChangeEvent extends WeatherEvent {
    constructor(timestamp, windstrength) {
        super(timestamp);
        this.windstrength = windstrength;   
    }  

    getInformation(){
        return this.windstrength + ": wind strength";
    }

}


const weatherEvents = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.forEach(weatherEvent => weatherEvent.print());

// const weather = new WeatherEvent("2022-11-29 03:00");
// console.log(weather);
// CONNECTION TO API //

let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4428475&units=imperial&APPID=826efe9c55de5d2734cfce7a148b4eac';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    
    document.getElementById('currenttemp-g').innerHTML = Math.round(weatherData.main.temp_max);
    
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    
    document.getElementById('windspeed').innerHTML = Math.round(weatherData.wind.speed);
    
    document.getElementById('clouds').innerHTML = weatherData.clouds.all;
    
    document.getElementById('currentCond-g').innerHTML = weatherData.weather[0].description;
    
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage-g').src = imagesrc;
    
}
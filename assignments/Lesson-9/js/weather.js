var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=4720583&appid=826efe9c55de5d2734cfce7a148b4eac&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('temp').innerHTML = weatherData.main.temp;
    document.getElementById('wind').innerHTML = weatherData.wind.speed;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    

} // end of the function
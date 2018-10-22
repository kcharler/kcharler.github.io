var weatherObject = new XMLHttpRequest ();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=826efe9c55de5d2734cfce7a148b4eac&units=imperial',true);
weatherObject.send();
weatherObject.onload = function() {
var weatherInfo = JSON.parse(weatherObject.responseText);
console.log(weatherInfo);

document.getElementById('place').innerHTML = weatherInfo.name;
document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
document.getElementById('currentHum').innerHTML = weatherInfo.main.humidity;
var iconcode = weatherInfo.weather["0"].icon;
var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
document.getElementById('weather_icon').src = icon_path;

} // end of the function
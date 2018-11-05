function calcuateWindChillFactor(temperature, windSpeed) {
    var t = 76 ;  /* temperature in Fahrenheit*/
    var s = 5; /* wind speed in miles per hour*/

    var chill = 35.74 + 0.6215*t - 35.75 * (Math.pow(wind, 0.16))  + 0.4275 * t * Math.pow(wind, 0.16)
    chill = Math.round(chill) + "°F" 

    document.getElementById("windchill").innerHTML = chill;
}
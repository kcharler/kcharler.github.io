
    var t = 76; 
    var s = 5;
    var chill = 35.74 + 0.6215 * t - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * Math.pow(s, 0.16)
    chill = Math.round(chill) + "°F"

    document.getElementById("windchill").innerHTML = chill;    
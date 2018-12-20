var section = document.querySelector('section');
var requestURL = '"D:\New folder\CIT 230\kcharler.github.io\assignments\Final Project\scripts\temples.json"';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function () {
    var townInfo = request.response;
    showInfo(townInfo);
}

function showInfo(jsonObj) {
    var info = jsonObj['temples'];

    for (var i = 0; i < info.length; i++) {
        if (i === 2) {
            continue;
        }
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');
        var myImage = document.createElement('img');


        
        
        myPara1.textContent =  info[i].temple1;
        myPara2.textContent = 'Current Population: ' + info[i].currentPopulation;
        myPara3.textContent = 'Average Rainfall: ' + info[i].averageRainfall;
        

        var townEvents = info[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            if (i === 2) { continue; }

            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }

       

        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImage);
        

        section.appendChild(myArticle);
    }
}

//Desislava Dicheva
//November 7, 2018

var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
              var data = JSON.parse(xmlhttp.responseText);
              //access json properties here
              var imgIcon = data.weather[0].icon;
              var imgUrl = "http://openweathermap.org/img/w/" + imgIcon + ".png";

              document.getElementById('weather').innerHTML = "Location: " + data["name"] + "<br />" +  "<img src=' "+ imgUrl + "' />" + "<br />" + "Description/Conditions: " + data.weather[0].description + "<br />" + "Temperature: " + data["main"]["temp"] + "&#8451; <br />"  + "Low Temperature : " + data["main"]["temp_min"] + "&#8451; <br />" + "High Temperature : " + data["main"]["temp_max"] + "&#8451;";
           }
           else if (xmlhttp.status == 400) {
              document.getElementById('weather').innerHTML = 'There was an error 400';
           }
           else {
               document.getElementById('weather').innerHTML ='something else other than 200 was returned';
           }
        }
    };
    xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=4167147&units=metric&APPID=8358cc506b8a7f6961d00310169e3e9e", true);
    xmlhttp.send();

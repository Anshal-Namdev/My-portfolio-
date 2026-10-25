let city = document.getElementById("city");
let search = document.getElementById("search");

let name = document.getElementById("name");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let humidity = document.getElementById("humidity");

search.addEventListener("click", function() {

    let cityName = city.value;

    if (cityName == "") {
        alert("Enter a city name");
    }

    else if (cityName.toLowerCase() == "indore") {
        name.innerText = "Indore";
        temp.innerText = "30°C";
        weather.innerText = "Clear Sky";
        humidity.innerText = "Humidity: 60%";
    }

    else if (cityName.toLowerCase() == "bhopal") {
        name.innerText = "Bhopal";
        temp.innerText = "27°C";
        weather.innerText = "Cloudy";
        humidity.innerText = "Humidity: 65%";
    }

    else if (cityName.toLowerCase() == "delhi") {
        name.innerText = "Delhi";
        temp.innerText = "32°C";
        weather.innerText = "Sunny";
        humidity.innerText = "Humidity: 55%";
    }

     else if (cityName.toLowerCase() == "barwani") {
        name.innerText = "Barwani";
        temp.innerText = "29°C";
        weather.innerText = "Cloudy";
        humidity.innerText = "Humidity: 55%";
    }

    else {
        name.innerText = "City not found";
        temp.innerText = "--°C";
        weather.innerText = "No data";
        humidity.innerText = "Humidity: --%";
    }

});
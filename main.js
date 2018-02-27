const searchCity = document.getElementById('searchCity');

searchCity.addEventListener('change', function(){
  const searchValue = searchCity.value;
  getTodaysWeather(searchValue);
})

getTodaysWeather("Stockholm");

function getTodaysWeather(city){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=20a5e7348daf2de3c94dc3bbb83eede5&units=metric&lang=se')
    .then(function(response){
      return response.json();
    })
    .then(function(weatherData){
      displayWeather(weatherData);
    })
    .catch(function(error){
      console.log(error);
    })
}


function displayWeather(weatherData){
  console.log(weatherData);
  const weatherInfoElement = document.getElementById('weatherInfo');
  let weatherInfo = `
    <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" />
    <p> ${weatherData.weather[0].description} </p>
    <p> ${weatherData.main.temp} ℃ </p>
  `;
  weatherInfoElement.innerHTML = weatherInfo;
}



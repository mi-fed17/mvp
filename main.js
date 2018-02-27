getTodaysWeather();

function getTodaysWeather(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=20a5e7348daf2de3c94dc3bbb83eede5&units=metric&lang=se')
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
  const weatherInfoElement = document.getElementById('weatherInfo');
  let weatherInfo = `
    <p> ${weatherData.weather[0].description} </p>
    <p> ${weatherData.main.temp} ℃ </p>
  `;
  weatherInfoElement
    .insertAdjacentHTML('afterbegin', weatherInfo);
}



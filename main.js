getTodaysWeather();

function getTodaysWeather(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=20a5e7348daf2de3c94dc3bbb83eede5&units=metric&lang=se')
    .then(function(response){
      return response.json();
    })
    .then(function(weatherData){
      console.log(weatherData.weather[0].description);
      console.log(weatherData.main.temp)
    })
    .catch(function(error){
      console.log(error);
    })
}
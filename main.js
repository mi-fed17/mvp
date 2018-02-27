function getTodaysWeather(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm')
    .then(function(response){
      return response.json();
    })
    .then(function(weatherData){
      console.log(weatherData);
    })
    .catch(function(error){
      console.log(error);
    })
}
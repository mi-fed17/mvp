const searchCity = document.getElementById('searchCity');
const appID = '20a5e7348daf2de3c94dc3bbb83eede5';
const weatherParam = 'weather';

searchCity.addEventListener('change', () => {
  const searchValue = searchCity.value;
  getTodaysWeather(searchValue);
})

getTodaysWeather();

// Expects a parameter!!!
function getTodaysWeather(city = "Stockholm"){
  // Only if value isn't present
  // if(!city){
  //   city = "Stockholm";
  // }
  // // Ternary operator
  // city ? "Stockholm" : city;
  fetch(`https://api.openweathermap.org/data/2.5/${weatherParam}?q=${city}&APPID=${appID}&units=metric&lang=se`)
    .then((response) => response.json())
    .then((weatherData) =>  {
      displayWeather(weatherData)
    })
    .catch((error) => {
      console.log(error);
    })
}


function displayWeather(weatherData){
  // const main = weatherData.main;
  //const weather = weatherData.weather;
  const { main, weather } = weatherData;
  const weatherInfoElement = document.getElementById('weatherInfo');
  let weatherInfo = `
    <img src="https://openweathermap.org/img/w/${weather[0].icon}.png" />
    <p> ${weather[0].description} </p>
    <p> ${main.temp} ℃ </p>
  `;
  weatherInfoElement.innerHTML = weatherInfo;
}







const searchCity = document.getElementById('searchCity');
const appID = '20a5e7348daf2de3c94dc3bbb83eede5';
const weatherParam = 'weather';

searchCity.addEventListener('change', () => {
  const searchValue = searchCity.value;
  getTodaysWeather(searchValue);
})

getTodaysWeather();

// Expects a parameter!
function getTodaysWeather(city = "Stockholm"){
  fetch(`fetch_weather.php`)
    .then((response) => response.json())
    .then((weatherData) =>  {
      displayWeather(JSON.parse(weatherData));
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

fetchTodos();

function fetchTodos(){
  fetch('fetch_todos.php')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
}

function postTodo(){
  const formData = new FormData();
  formData.append('text', ' Buy A house');
  formData.append('complete', false);
  fetch('fetch_todos.php',{
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
  })
}

postTodo();

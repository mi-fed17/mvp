<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Medieinstituets VäderPrognos</title>
    <link rel="shortcut icon" href="images/sunny.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
</head>

<?php
    $response = file_get_contents('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=20a5e7348daf2de3c94dc3bbb83eede5&units=metric&lang=se'); 
    $weatherData = json_decode($response, true);
?>

<body>
    <div id="sun"></div>
    <input type="text" id="searchCity">
    <div id="weatherInfo">
        <p> <?= $weatherData["main"]["temp"] ?> </p>
        <p> <?= $weatherData["weather"][0]["description"] ?> </p>
    </div>
    <script src="main.js"></script>
</body>






</html>
<?php
$response = file_get_contents('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=20a5e7348daf2de3c94dc3bbb83eede5&units=metric&lang=se');
echo json_encode($response);
header("Content-type:application/json");
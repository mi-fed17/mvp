<?php

$pdo = new PDO(
  "mysql:host=localhost:8889;dbname=fetch_test;charset=utf8",
  "root",
  "root" 
);

$statement = $pdo->prepare(
  "INSERT INTO todos (text, complete) 
  VALUES (:text, :complete)"
);

$statement->execute(array(
  ":text"     => $_POST["text"],
  ":complete" => $_POST["complete"],
));

echo json_encode(array(
  "text" => $_POST["text"],
  "complete" => $_POST["complete"],
  "id" => $pdo->lastInsertId()
));

// $get_statement = $pdo->prepare(
//   "SELECT * FROM todos"
// );

// $get_statement->execute();
// $todos = $get_statement->fetchAll(PDO::FETCH_ASSOC);

// echo json_encode($todos);


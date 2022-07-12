<?php

  $db = new PDO('sqlite:database.db');

  $username = $_POST['username'];
  $username = preg_replace ("/[^a-zA-Z\s]/", '', $username);

  $text = $_POST['text'];

  $stmt = $db->prepare('INSERT INTO posts VALUES(NULL, ?, ?)');
  $stmt->execute(array($username, $text));

  header('Location: /');
?>
<?php
  session_start();

  $db = new PDO('sqlite:database.db');

  $username = $_POST['username'];
  $password = $_POST['password'];

  $stmt = $db->prepare("SELECT password FROM users WHERE username = ?");
  
  $stmt->execute(array($username));

  $hashed_password = $stmt->fetch();

  if ($hashed_password && password_verify($password, $hashed_password[0])){
    $_SESSION['username'] = $username;
  } 

  header('Location: /');

?>
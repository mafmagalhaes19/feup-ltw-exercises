<?php
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];
    $sum = $num1 + $num2;
?>

<!DOCTYPE html>

<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Sum Result</title>
</head>
<body>
    <p><?=$num1?> + <?=$num1?> = <?=$sum?></p>
    <p> <a href="form2.html"> Do another sum. </a> </p>
</body>
</html>

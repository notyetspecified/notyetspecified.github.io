<?php

include("calendar.php");
session_start();

$day = $_POST["day"];
$month = $_POST["month"];
$year = $_POST["year"];

drawDay($day, $month, $year);

 ?>

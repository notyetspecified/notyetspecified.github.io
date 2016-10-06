<?php

include("calendar.php");
session_start();

$month = $_POST["month"];
$year = $_POST["year"];

drawMonth($month, $year);

 ?>

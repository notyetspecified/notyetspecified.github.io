<?php

include("calendar.php");
session_start();

$hour = $_POST["hour"];
$day = $_POST["day"];
$month = $_POST["month"];
$year = $_POST["year"];
$event = $_POST["event_value"];
$name = $_POST["name"];

editEvent($hour, $day, $month, $year, $event, $name);

 ?>

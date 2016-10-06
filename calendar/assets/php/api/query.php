<?php

function getMonthEvents($month, $year)
{
  $ROOTPATH = __FILE__;
  $ROOTPATH = str_replace("assets/php/api/query.php","",$ROOTPATH);

  $dbh = new PDO('sqlite:'.$ROOTPATH.'db/calendar');
  $stmt = $dbh->prepare('SELECT *
                         FROM day
                         WHERE month = :month AND
                                year = :year');
  $stmt->bindParam(':month', $month, PDO::PARAM_INT);
  $stmt->bindParam(':year', $year, PDO::PARAM_INT);
  $stmt->execute();

  return $stmt->fetchAll();
}

function getDayEvents($day, $month, $year)
{
  $ROOTPATH = __FILE__;
  $ROOTPATH = str_replace("assets/php/api/query.php","",$ROOTPATH);

  $dbh = new PDO('sqlite:'.$ROOTPATH.'/db/calendar');
  $stmt = $dbh->prepare('SELECT *
                         FROM day
                         WHERE day = :day AND
                               month = :month AND
                               year = :year');
  $stmt->bindParam(':day', $day, PDO::PARAM_INT);
  $stmt->bindParam(':month', $month, PDO::PARAM_INT);
  $stmt->bindParam(':year', $year, PDO::PARAM_INT);
  $stmt->execute();

  return $stmt->fetchAll();
}

function editEvent($hour, $day, $month, $year, $event, $name)
{
  $ROOTPATH = __FILE__;
  $ROOTPATH = str_replace("assets/php/api/query.php","",$ROOTPATH);

  $dbh = new PDO('sqlite:'.$ROOTPATH.'/db/calendar');
  $stmt = $dbh->prepare('SELECT * FROM day
                         WHERE hour=:hour AND
                               day=:day AND
                               month=:month AND
                               year=:year');
  $stmt->bindParam(':hour', $hour, PDO::PARAM_INT);
  $stmt->bindParam(':day', $day, PDO::PARAM_INT);
  $stmt->bindParam(':month', $month, PDO::PARAM_INT);
  $stmt->bindParam(':year', $year, PDO::PARAM_INT);
  $stmt->execute();

  if(sizeof($stmt->fetchAll()) > 0)
  {
    if($event == "null" && $name == "")
    {
      $stmt = $dbh->prepare('DELETE FROM day
                             WHERE hour=:hour AND
                                   day=:day AND
                                   month=:month AND
                                   year=:year');
      $stmt->bindParam(':hour', $hour, PDO::PARAM_INT);
      $stmt->bindParam(':day', $day, PDO::PARAM_INT);
      $stmt->bindParam(':month', $month, PDO::PARAM_INT);
      $stmt->bindParam(':year', $year, PDO::PARAM_INT);
      $stmt->execute();
    }
    else
    {
      $stmt = $dbh->prepare('UPDATE day
                             SET event = :event,
                                 name = :name
                             WHERE hour=:hour AND
                                   day=:day AND
                                   month=:month AND
                                   year=:year');
      $stmt->bindParam(':hour', $hour, PDO::PARAM_INT);
      $stmt->bindParam(':day', $day, PDO::PARAM_INT);
      $stmt->bindParam(':month', $month, PDO::PARAM_INT);
      $stmt->bindParam(':year', $year, PDO::PARAM_INT);
      $stmt->bindParam(':event', $event, PDO::PARAM_STR);
      $stmt->bindParam(':name', $name, PDO::PARAM_STR);
      $stmt->execute();
    }
  }
  else
  {
    $stmt = $dbh->prepare('INSERT INTO day
                           (hour,day,month,year,event,name)
                           VALUES (:hour,:day,:month,:year,:event,:name)');
    $stmt->bindParam(':hour', $hour, PDO::PARAM_INT);
    $stmt->bindParam(':day', $day, PDO::PARAM_INT);
    $stmt->bindParam(':month', $month, PDO::PARAM_INT);
    $stmt->bindParam(':year', $year, PDO::PARAM_INT);
    $stmt->bindParam(':event', $event, PDO::PARAM_STR);
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->execute();
  }
}

 ?>

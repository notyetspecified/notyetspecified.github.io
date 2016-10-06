<?php

include("api/query.php");

function drawMonth($month, $year)
{
  $events = getMonthEvents($month, $year);
  $number = cal_days_in_month(CAL_GREGORIAN, $month, $year);
  $days_in_month = $number;
  $date = new DateTime("01-$month-$year");
  $start_week_day = strftime("%w", $date->getTimestamp());
  $counter=0;
  $overflow=0;
  $start_flag = FALSE;

  ?>
  <table id="month_table" class="table table-bordered">
    <tr>
      <?php
        for ($i=1; $i <= 7; $i++)
        {
          ?>
          <th><?php echo date('D', strtotime("Saturday +{$i} days")); ?></th>
          <?php
        }
       ?>
    </tr>
  <?php

  for ($i=0; $i < 6 ; $i++)
  {
    ?>
    <tr>
      <?php
        for ($j=0; $j < 7; $j++)
        {
          ?>
            <td>
              <div class="month_day">
                <?php
                  if(++$counter <= $number)
                  {
                    if($start_week_day == $j && !$start_flag)
                    {
                      $start_flag = TRUE;
                      echo $counter-$overflow;
                    }
                    else if($start_flag)
                    {
                      echo $counter-$overflow;
                    }
                    else
                    {
                      $number++;
                      $overflow++;
                    }
                  }
                ?>
              </div>
              <a class="day"
                id="<?php
                  $this_day = $counter-$overflow;
                  if($this_day > 0 && $this_day <= $days_in_month)
                    echo ($counter-$overflow)."-".$month."-".$year;
                ?>"
                href="#"><div class="events">
              <?php
                for ($k=0; $k < 24; $k++)
                {
                  ?>
                  <div class="row">
                    <div class="col-sm-12 event <?php
                          if($this_day > 0 && $this_day <= $days_in_month)
                          {
                            $class = getEventClass($events, $k, ($counter-$overflow), $month, $year);
                            echo $class;
                          }
                          else
                          {
                            $class = "null";
                            echo "disabled";
                          }
                          ?>"
                          style="background-color:<?php
                            echo getBackgroundColor($class);
                          ?>">
                    </div>
                  </div>
                  <?php
                }
               ?>
             </div></a>
           </td>
          <?php
        }
       ?>
    </tr>
    <?php
  }

  ?>
  </table>
  <?php
}

function drawDay($day, $month, $year)
{
  $day_events = getDayEvents($day, $month, $year);
  ?>
  <table id="day_table" class="table table-striped table-bordered">
    <tr>
      <th class="hour">Hour</th>
      <th>Event</th>
      <th>Name</th>
    </tr>
    <?php
    $event_names = getEventNames();

    for ($i=0; $i < 24; $i++)
    {
      $event = getHourEvent($day_events, $i);
      $name = getHourName($day_events, $i);
      ?>
      <tr class="<?php echo $event; ?>"
          style="background-color:<?php echo getBackgroundColor($event)?>">
        <th class="hour" style="text-align: center;"><?php echo $i.":00 - ".($i+1).":00" ?></th>
        <td class="event">
          <select id="<?php echo "event-$i-$day-$month-$year"; ?>" class="form-control event_select input-sm">
            <option value="null" <?php if($event == ""){echo "selected";} ?>>-</option>
            <?php
              foreach ($event_names as $event_name)
              {
                ?>
                <option value="<?php echo $event_name; ?>" <?php if($event == $event_name){echo "selected";} ?>><?php echo $event_name; ?></option>
                <?php
              }
             ?>
          </select>
        </td>
        <td>
          <input type='text' class='form-control name_input input-sm' id="<?php echo "name-$i-$day-$month-$year"; ?>" value='<?php echo $name ?>'>
        </td>
      </tr>
      <?php
    }
     ?>
  </table>
  <?php
}

function getEventClass($events, $hour, $day, $month, $year)
{
  foreach ($events as $event)
  {
    if($hour == $event["hour"] && $day == $event["day"] &&
        $month == $event["month"] && $year == $event["year"])
    {
      return $event["event"];
    }
  }
  return "";
}

function getHourEvent($day_events, $hour)
{
  foreach ($day_events as $event)
  {
    if($event["hour"] == $hour)
    {
      return $event["event"];
    }
  }

  return "";
}

function getHourName($day_events, $hour)
{
  foreach ($day_events as $event)
  {
    if($event["hour"] == $hour)
    {
      return $event["name"];
    }
  }

  return "";
}

function readConfigProperty($property)
{
  $ROOTPATH = __FILE__;
  $ROOTPATH = str_replace("assets/php/calendar.php","",$ROOTPATH);
  $FILE_PATH = $ROOTPATH."config";

  $handle = fopen($FILE_PATH, "r");
  if ($handle)
  {
    while (($line = fgets($handle)) !== false)
    {
      if($line[0] != "#")
      {
        $property_line = explode(":", $line);
        $property_name = $property_line[0];
        $property_value = $property_line[1];

        if($property_name == $property)
          return $property_value;
      }
    }

    fclose($handle);
  } else {
      echo "error opening the file.";
  }
}

function getBackgroundColor($class)
{
  $events_str = readConfigProperty("events");
  $events = explode(",",$events_str);

  foreach ($events as $event)
  {
    $event = explode("-",$event);
    if($event[0] == $class)
    {
      return $event[1];
    }
  }

  return "";
}

function getEventNames()
{
  $events_str = readConfigProperty("events");
  $events = explode(",",$events_str);
  $names = array();

  foreach ($events as $event)
  {
    $event = explode("-",$event)[0];
    array_push($names, $event);
  }

  return $names;
}

function getLocale()
{
  return readConfigProperty("locale");
}

 ?>

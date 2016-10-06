<?php
  include("assets/php/calendar.php");

  setlocale(LC_TIME, "");
  setlocale(LC_TIME, getLocale());
  
 ?>

<!DOCTYPE html>
<html>
  <head>
  <meta charset='utf-8' />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- CSS -->
  <link href='assets/css/bootstrap.css' rel='stylesheet' />
  <link href='assets/css/calendar.css' rel='stylesheet' />
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
  <!-- SCRIPT -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
  <script src='assets/js/bootstrap.min.js'></script>
  <script src='assets/js/calendar.js'></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="row el_header">
            <div class="col-sm-6">
              <?php $max_year = readConfigProperty("max_year"); ?>
              <select id="year_select" class="form-control dropdown_title">
                <?php
                  for ($i=date('Y'); $i <= $max_year; $i++)
                  {
                    ?>
                    <option <?php if(date('Y') == $i){echo "selected";} ?>><?php echo $i; ?></option>
                    <?php
                  }
                ?>
              </select>
            </div>
            <div class="col-sm-6">
              <select id="month_select" class="form-control dropdown_title">
                <?php
                  for ($j=1; $j <= 12; $j++)
                  {
                    ?>
                      <option value="<?php echo $j; ?>" <?php if(date('m') == $j){echo "selected";} ?>>
                        <?php echo date('F', mktime(0, 0, 0, $j)); ?>
                      </option>
                    <?php
                  }
                 ?>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div id='month'>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <div class="row el_header">
                <div class="col-sm-6">
                  <h4 id="title_day">
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div id='day'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
<script>
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth()+1;
  var year = d.getFullYear();
  drawMonth(year, month);
  drawDay(day, year, month);
</script>

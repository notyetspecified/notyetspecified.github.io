
var pathname = window.location.pathname;

$( document ).ready(function()
{
  $("#year_select, #month_select").change(function()
  {
    var year = $("#year_select").val();
    var month = $("#month_select").val();

    drawMonth(year, month);
    $('#day').html("");
    $('#title_day').html("");
  });
});

$(document).on("click", ".day", function(e)
{
  var date = $(this).attr("id").split("-");
  var day = date[0];
  var month = date[1];
  var year = date[2];

  if(day !== "")
  {
    drawDay(day, year, month);
  }

  e.preventDefault();
});

$(document).on("input", ".name_input", function()
{
  var date = $(this).attr("id").split("-");
  var hour = date[1];
  var day = date[2];
  var month = date[3];
  var year = date[4];
  var name = $(this).val();
  var value = $("#event-"+hour+"-"+day+"-"+month+"-"+year+" option:selected").val();

  if(day !== "")
  {
    $.ajax({
       type: "POST",
       url: pathname+"assets/php/edit_event.php",
       data:  {
                hour: hour,
                day: day,
                year: year,
                month: month,
                value: value,
                name: name,
              },
       success: function(data)
       {
         //Nothing?
       }
     });
   }
});

$(document).on("change", ".event_select", function()
{
  var date = $(this).attr("id").split("-");
  var hour = date[1];
  var day = date[2];
  var month = date[3];
  var year = date[4];
  var event_value = $(this).val();
  var name = $("#name-"+hour+"-"+day+"-"+month+"-"+year).val();

  if(day !== "")
  {
    $.ajax({
       type: "POST",
       url: pathname+"assets/php/edit_event.php",
       data:  {
                hour: hour,
                day: day,
                year: year,
                month: month,
                event_value: event_value,
                name: name,
              },
       success: function(data)
       {
         drawMonth(year, month);
         drawDay(day, year, month);
       }
     });
   }
});

function drawMonth(year, month)
{
  $.ajax({
     type: "POST",
     url: pathname+"assets/php/month.php",
     data:  {
              year: year,
              month: month,
            },
     success: function(data)
     {
        $('#month').html(data);
     }
   });
}

function drawDay(day, year, month)
{
  $.ajax({
     type: "POST",
     url: pathname+"assets/php/day.php",
     data:  {
              day: day,
              year: year,
              month: month,
            },
     success: function(data)
     {
        $('#day').html(data);
     }
   });

   $("#title_day").text("Day "+day);
}

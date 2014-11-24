$(document).ready(function() {
  $.simpleWeather({


    location: 'Spokane, WA',
    woeid: '',
    unit: 'f',


    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.title+'&deg;'+weather.units.temp+'</h2>';

      console.log

      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
  // PUT DISPLAY
  $('#weather').html(html);



      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
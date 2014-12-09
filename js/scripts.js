var cheney = '99004';
var spokane = '99201';'99202';'99203';'99204'; '99205'; '99206';'99207';
var seattle = '98101';


 $.simpleWeather({
    
    location: spokane,
    woeid: '',
    unit: 'f',
    
    success: function(weather) {
      
      $('.temp').text(weather.temp);
      $('.current').text(weather.currently);
      $('.header').text(weather.city);
      $('.pressure').text(weather.pressure);
      $('.wind').text(weather.wind.direction).text(weather.speed);
      
      console.log(weather);

      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }

    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
    
  }); 

 $(document).ready(function() {  
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});


 $('#submit').click(function() {
        var zip = $('#zipcode').val();
        $('#results').content('location');
    });

function getWeather() {
  $.simpleWeather({
    location: '99202',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.city+', '+weather.region+'</h2>';
      html += '<ul><li>'+weather.temp+'&deg;'+weather.units.temp+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li><p>Wind Direction</p>'+weather.wind.speed+'</li>';
      html += '<li>'+weather.wind.direction+'</li></ul>';


      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';}

      var timestamp = moment(weather.updated);
      html += '<p>Weather updated '+moment(timestamp).fromNow()+'</p>';
      
      html += '<p>Weather updated at '+moment(timestamp).format('MM/DD/YY h:mma')+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}





// Defoult
 // Remove existing class
$('body').addClass('day');

// Click 'Day' change to day
$('#day').click( function(){
  
  // Remove existing class
  $('body').removeClass();
  
  // Add class of 'Day' to the <body>
  $('body').addClass('day');
  
  // console.log('Click on Day link');
  
});

// Click 'Night' change to night
$('#night').click( function(){
  
   // Remove existing class
  $('body').removeClass();
  
  // Add class of 'Day' to the <body>
  $('body').addClass('night');
  
  // console.log('Click on Day link');
  
  });
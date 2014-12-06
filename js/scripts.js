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
var cheney = '99004';
var spokane = '99201';'99202';'99203';'99204'; '99205'; '99206';'99207';
var seattle = '98101';


// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.header').text(weather.city);
      $('.pressure').text(weather.pressure);
      $('.wind').text(weather.wind.direction).text(weather.speed);
      $('.sunrise').text(weather.sunrise);

      // See console for all properties of object
      console.log(weather);
    },

    
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});




 $.simpleWeather({
    
    location: spokane,
    woeid: '',
    unit: 'f',
    
    success: function(weather) {
     
      
      console.log(weather);

  

   $("#weather").html(html);
    },
    

    
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
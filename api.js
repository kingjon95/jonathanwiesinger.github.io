$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
      
        
    });
    
    $('#randomFact').click(function(event){
        getFact(event);
        
    });
    
    
});
function performSearch(event){
    var request;
    event.preventDefault();
   request = $.ajax({
       
        url:'https://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
            q: $('#city').val(),
            appid: '8d33b3444633ebf486b0338a07501dc3',
            units: 'imperial'
        }
    })
    request.done(function(response){
        formatSearch(response);
    })
}

function formatSearch(jsonObject) {
    var city_name = jsonObject.name;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    

    $('#city-name').text(city_name);
    $('#city-weather').text(city_weather);
    $('#city-temp').text(city_temp+ 'Farenheight');
    

}
function getFact(event) {
    var pull;
    event.preventDefault();
   pull = $.ajax({
        type: 'GET',
        url: 'https://uselessfacts.jsph.pl/random.html?language=en'

    })
    $('.buttonSpan').addClass('spinner-border spinner-border-sm');
    pull.done(function(respond){
        appendFact(respond);
        $('.buttonSpan').removeClass('spinner-border spinner-border-sm');

    })

}
function appendFact(fact){
    $('.randomFact').html(fact);
    $('.fact-footer').remove();
    $('.site-title').remove();
    $('.footer').remove();
    
}





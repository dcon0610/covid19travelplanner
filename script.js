$(document).ready(function  (){
    var searchedCountries=[]
   



   
    for (i=0; i<20; i++) 
         { 
        $("#userB"+i).click(function() {
            if($('#go').data('clicked'))
            {
          return
        }
           else {
            $("#warningmodal").css('display', 'inline');
         

           }
        })



}

$("#ok").click(function() {
    $("#warningmodal").css('display', 'none');

})

    for (i=1;i<localStorage.length+1; i++){
        searchedCountries[i]=localStorage.getItem(i)
     
        var searches = $("<li>", {id: i+"history"});
       
        $('#searchHistory').append(searches)
        $("#"+i+"history").html(searchedCountries[i])
  } 
  
  $('#country').keypress(function (e) {
    var key = e.which;
    if(key == 13){
        Covid()
    }})
 
    $('#search').click(function () {
        Covid()})
        
      function Covid() {
        
       var country = $("#country"). val();
            k=localStorage.length
            localStorage.setItem(k+1,country)
            searchedCountries=[]
            for (i=1;i<localStorage.length+1; i++){
                searchedCountries[i]=localStorage.getItem(i)
             
                var searches = $("<li>", {id: i+"history"});
               
                $('#searchHistory').append(searches)
                $("#"+i+"history").html(searchedCountries[i])
          } 


       console.log(country)
       var today = moment.utc(moment().format()).format("YYYY-MM-DD")
       recentUpdate =  moment.utc(today).subtract(2,'d').format("YYYY-MM-DD") + "T00:00:00Z"
  
      var weekAgo = moment.utc(today).subtract(9,'d').format("YYYY-MM-DD")
      weekAgoUpdate = weekAgo + "T00:00:00Z"
  console.log(weekAgoUpdate)
      //console.log(todayUpdate)
        
    $.ajax({
        url: "https://api.covid19api.com/total/country/" + country +"/status/confirmed?from=" + weekAgoUpdate + "&to=" + recentUpdate,
        method: "GET"
      }).then(function(response) {
        console.log(response)
       var todayCases = response[6].Cases
        var weekAgoCases = response[0].Cases
        var difference = todayCases-weekAgoCases
       $("#last_seven"). html(difference)
       $("#total_cases"). html(todayCases)
       if (difference<100){
       $("#recommendation"). html('<p>'+"Travel to this country is recommended: find the weather in the city linked"+'</p>')
       $("#recommendation"). append('<a href="weatherapp/weatherapp.html" target="_blank">Find the Weather</a>')
       $("#noWrap").addClass('hide')
       $("#schedule").addClass('hide')
       }
       else if (difference>100){
        $("#recommendation"). html('<p>'+"Travel to this country is NOT recommended:"+'</p>')
        $("#recommendation"). append('<p>'+"Please see the timezone converter to schedule meetings below"+'</p>')
        $("#noWrap").removeClass('hide')
        $("#schedule").removeClass('hide')
       }
    })
  
  
 
      }

      $(function(){
        $('#go').click(function() {
            $(this).data('clicked', true);
            computedTimeDifference()
        });
    });
    

  function computedTimeDifference() {
    var myCityTimeOffset
    var destinationCityTimeOffset
    var dayLightSavingMyCity
    var isDayLightSavingMyCity
    var dayLightSavingDestinationCity
    var isDayLightSavingDestinationCity

    var APIkeytimezone = "9652044f0e85425c9a02a36ec01ddd01&tz"
    var myCity=$("#mycity"). val();
    var destinationCity=$("#destinationcity"). val();
    var destinationCountry=$("#destinationcountry"). val();
    
    myCity=myCity.charAt(0).toUpperCase()+myCity.slice(1)
    k=localStorage.length
    var myCountry=$("#continent"). val();
    myCountry=myCountry.charAt(0).toUpperCase()+myCountry.slice(1)
   
    
    destinationCity=destinationCity.charAt(0).toUpperCase()+destinationCity.slice(1)
    destinationCountry=destinationCountry.charAt(0).toUpperCase()+destinationCountry.slice(1)

   
    
   
    thisCityUrl= "https://api.ipgeolocation.io/timezone?apiKey=" +APIkeytimezone+"="+ myCountry + "/" + myCity
    destinationCityUrl = "https://api.ipgeolocation.io/timezone?apiKey=" +APIkeytimezone+"="+ destinationCountry + "/" + destinationCity
    $.ajax({
        url: thisCityUrl,
        method: "GET",
      }).then(function(response) {
        myCityTimeOffset=response.timezone_offset
        dayLightSavingMyCity=response.dst_savings
        isDayLightSavingMyCity=response.is_dst
        console.log(response)



   
  })

  $.ajax({
    url: thisCityUrl,
    method: "GET",
  }).then(function(response) {
    myCityTimeOffset=response.timezone_offset
    $.ajax({
        url: destinationCityUrl,
        method: "GET",
      }).then(function(response) {
        destinationCityTimeOffset=response.timezone_offset
        dayLightSavingDestinationCity=response.dst_savings
        isDayLightSavingDestinationCity=response.is_dst
        console.log(response)
      

        for (i=0; i<20; i++) {
            $("#userB"+i).click(function() {
                var totalTimeDifferenceHours
                var totalTimeDifferenceMinutes
                var dayLightSavingAltered
                var time = this.id.replace(/\D/g, "");
                
                var date=$("#dateId"). val();
                console.log("date, time", date, time)
                var array=date.split("-")
               
                formattedDate=new Date(array[0], array[1], array[2], time)
                console.log(formattedDate)
             
               
               
                
            

                console.log("myCityTimeOffset", myCityTimeOffset)
                console.log("destination city time offset", destinationCityTimeOffset)
                console.log("time", time)
                if (isDayLightSavingMyCity){
                    alert("adelaide")
                    myCityTimeOffset=myCityTimeOffset+dayLightSavingMyCity

                }

                if (isDayLightSavingDestinationCity){
              
                   
                    dayLightSavingAltered=destinationCityTimeOffset+dayLightSavingDestinationCity
                    console.log("daylightsavingsaltered", dayLightSavingAltered)

                }

                totalTimeDifferenceHours=dayLightSavingAltered-myCityTimeOffset
                console.log("totaltimedifferencehours", totalTimeDifferenceHours)
                totalTimeDifferenceMinutes=(totalTimeDifferenceHours-Math.floor(totalTimeDifferenceHours))*60
                console.log("totaltimedifferenceminutes", totalTimeDifferenceMinutes)

          
              formattedDate.setHours( formattedDate.getHours() + Math.floor(totalTimeDifferenceHours) )
              console.log("date after set hours", formattedDate)
              formattedDate.setMinutes( formattedDate.getMinutes() + totalTimeDifferenceMinutes );
              console.log("formattedDate after set minutes", formattedDate)
             
             
            $("#time").html('<p>'+"Year: "+ moment(formattedDate).format('YYYY')+'</p>')
            $("#time").append('<p>'+"Month: "+ moment(formattedDate).format('MMMM')+'</p>')
            $("#time").append('<p>'+"Day: "+ moment(formattedDate).format('DD')+'</p>')
            $("#time").append('<p>'+"Time: "+ moment(formattedDate).format('HH:mm')+'</p>')
            

          
                
           
            })

        }
       


})

})
    

}




   






})
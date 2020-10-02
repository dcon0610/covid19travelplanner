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
       

    })
  
  
 
      }

      $(function(){
        $('#go').click(function() {
            $(this).data('clicked', true);
            computedTimeDifference()
        });
    });
    

        // $('#search').click(function () {
        //     Covid()})
  function computedTimeDifference() {
    
    var myCity=$("#mycity"). val();
    myCity=myCity. charAt(0). toUpperCase() +myCity.slice(1)
    var myCountry= localStorage.getItem(localStorage.length)
    myCountry=myCountry. charAt(0). toUpperCase()+myCountry.slice(1)
    var destinationCity=$("#destinationcity"). val();
    destinationCity=destinationCity. charAt(0). toUpperCase()+destinationCity.slice(1)
    var destinationCountry=$("#destinationcountry"). val();
    destinationCountry=destinationCountry. charAt(0). toUpperCase()+destinationCountry.slice(1)
    var date=$("#dateId"). val();


        for (i=0; i<20; i++) {
            $("#userB"+i).click(function() {
                var time = this.id.replace(/\D/g, "");
                console.log(myCity)
                console.log(myCountry)
                console.log(destinationCity)
                console.log(destinationCountry)
             
    


// // Copy & Paste this
// Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
// if(!Date.now) Date.now = function() { return new Date(); }
// Date.time = function() { return Date.now().getUnixTime(); }
// // Get the current time as Unix time
// var currentUnixTime = Date.time();
// currentUnixTime = Date.now().getUnixTime(); // same as above
// // Parse a date and get it as Unix time

var timestamp =new Date('2012-08-10').getTime() / 1000
console.log(timestamp)
moment.tz(timestamp, "America/Los_Angeles").format();








    var newYork    = moment.tz("2013-11-18 14", "Europe/London");
    var time = newYork.format('HH-DD-MM-YY')
    console.log(time)
    var losAngeles = newYork.clone().tz("America/New_York");
    console.log(losAngeles.format('HH-DD-MM-YY'))
                // var myCityTime = new moment("2013-11-24T09:00", "YYYY-MM-DDTHH:mm").utc().format();
                // myCityTime=moment.utc(myCityTime,"DD-MM-YYYY h:mm:ss A")
                // var destinationCityTime = myCityTime.clone().tz("America/New_York");
                // myCityTime=myCityTime.format('HH-DD-MM-YY')
                // destinationCityTime = destinationCityTime.format('HH-DD-MM-YY')
                
               
               
            })

        }
       


}

})
    

// var newYork    = moment.tz("2013-11-18 14", "America/Toronto");
//     var time = newYork.format('HH-DD-MM-YY')
//     console.log(time)
//     var losAngeles = newYork.clone().tz("Australia/adelaide");
//     console.log(losAngeles.format('HH-DD-MM-YY'))




   







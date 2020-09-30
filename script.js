$(document).ready(function  (){
    var searchedCountries=[]

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

      $('#mycity').keypress(function (e) {
        var key = e.which;
        if(key == 13){
           storeUTC()
        }})
     

        // $('#search').click(function () {
        //     Covid()})
  function storeUTC() {
    var APIkeytimezone = "9652044f0e85425c9a02a36ec01ddd01&tz"
    var myCity=$("#mycity"). val();
    myCity=myCity.charAt(0).toUpperCase()+myCity.slice(1)
   
    k=localStorage.length
    var myCountry=localStorage.getItem(k)
    myCountry=myCountry.charAt(0).toUpperCase()+myCountry.slice(1)
    thisCityUrl= "https://api.ipgeolocation.io/timezone?apiKey=" +APIkeytimezone+"="+ myCountry + "/" + myCity
    
    $.ajax({
        url: thisCityUrl,
        method: "GET",
      }).then(function(response) {
        myCityTime=response.timezone_offset
   
  })
console.log(myCityTime)
}
    

})
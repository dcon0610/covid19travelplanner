$(document).ready(function  (){

    
    
    $('#search').click(function () {
      // var APIkey="5cf9dfd5-3449-485e-b5ae-70a60e997864"
       var country = $("#country"). val();
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
       
       if (difference<2000) {
         APIkey = "15c78bc522dec70681f7198c075cca56"
        $.ajax({
          url: "https://rapidapi.com/squawk7000/api/aerodatabox",
          method: "GET"
        }).then(function(response11) {
       console.log(response11)
        })
       }
      else {
  return
  
  
      }
      })
       
      })
  
  
    })


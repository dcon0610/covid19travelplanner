$(document).ready(function  (){

    
    
    $('#search').click(function () {
      // var APIkey="5cf9dfd5-3449-485e-b5ae-70a60e997864"
       var country = $("#searchcity"). val();
       var today = moment.utc(moment().format()).format("YYYY-MM-DD")
       todayUpdate = today + "T00:00:00Z"
      var weekAgo = moment.utc(today).subtract(7,'d').format("YYYY-MM-DD")
      weekAgoUpdate = weekAgo + "T00:00:00Z"
  console.log(weekAgoUpdate)
      console.log(todayUpdate)

    $.ajax({
        url: "https://api.covid19api.com/total/country/" + country +"/status/confirmed?from=" + weekAgoUpdate + "&to=" + todayUpdate,
        method: "GET"
      }).then(function(response) {
     
       var todayCases = response[6].Cases
        var weekAgoCases = response[0].Cases
        var difference = todayCases-weekAgoCases
       $("#info"). html(difference) 
       
       if (difference<2000) {
         APIkey = "15c78bc522dec70681f7198c075cca56"
        $.ajax({
          url: "http://api.aviationstack.com/v1/search=Australia?access_key=15c78bc522dec70681f7198c075cca56",
          method: "GET"
        }).then(function(response) {
       console.log(response)
        })
       }
      else {
return


      }
      })







        
      })


    })


    







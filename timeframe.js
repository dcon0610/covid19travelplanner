
// conversion of now to UNIX time stamp for AJAX call
var meetingDate = Math.round( new Date().getTime()/1000);
console.log(meetingDate);
// query URL of locations to get timezone difference for meeting calculations
// creation of query values
var placeAlpha = `${$("#countryOne").val()}/${$("#cityOne").val()}`;


var queryURL = "http://api.ipgeolocation.io/timezone?apiKey=93dcbede381644ab9e11fcd854c1080d&tz=America/Los_Angeles";

$.ajax({
    query: queryURL,
    method: "GET",

}).then(function(response) {
    console.log(response)
})

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
   }
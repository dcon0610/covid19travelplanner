# covid19travelplanner
Xenonth has joined the team

    feature is to b create meetings based on time and inform the user of the current covid situation with the most recent data.

BEGIN
var userGeoLocation = code to get geolocation info
    destination = input.val()
    
    function displayToScreen () {
        var currentTime = momentjs.format("Local time hours and minutes")
        $("#displayTime").append(currentTime)
    };

    function geoLocationCovidInfo {

    queryURL = "http://covidapi/?" + destination + "[apikey=jfkldas;fksda;flsdajkl;fasf;klasf]"
    AJAX call {
        query = covid data website
    }
    .succes (function {
        Once retrieved covid data set it up to display information to
        var keyUserInfo = response.cityCovidData
        $("#destinationInfo").append(keyUserINfo);
        function setupKeyInfo() {
            selection to target, modify and nicely display retrieved information
        } 

    })

    AJAX call {
        trustworthy news site, pull covid articles for user's location if covid data is to hard to use
    }
        $("#covidDestinationTravelNews").
    }
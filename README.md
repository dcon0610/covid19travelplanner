# covid19travelplanner
Team:
    David - Lead Developer and Programmer
    Hebe - UI Design Lead
    Timothy - Test and Review Lead

## User Story
Our company has started to return to normalcy and wish to return to face-to-face business meetings where it is safe to do so.  Our company needs an application which shows us the most recent COVID information, if possible in real time including infection data, the location's lockdown situation and or current restrictions.    Then base on the data the option to have a link to a sitesearch available flights and be able or the ability to display timezone information difference to make it easier to plan a meeting.

### How to Use:
In the covid description field type in a destination country of your choice then click go, number of infections and the weekly no of infections will be displayed to inform you of the current covid situation.  Based on this nbumber a link may appear to a booking site if the country is safe as well as the weather of that country.  If not save we have a timezone3 comparison feature which requires you to input the city which you are from, your destination city and the continent that city is in.  Ie, Asia Tokyo.  Next you select a time, click the save button and the correct time should appear.   

### User Story: Technical Description:
WHEN I search for a city
THEN I expect to see the latest Covid information
THEN if destination is safe, ability to be taken to a booking information site
WHEN I search an overseas city 
THEN I am provided with an alternative solution like a meeting planner.

## Application Purpose (Minimum Viable Product)
Our application is designed for the user to able to type in a travel destination and recieve information based on the current situation in that city. This information includes the latest covid data statistics and news information.  If the user, covid database and or our algorithm deems the travel destination 'safe' our application will then allow the user to view available flights with a link to an official booking flight.

### Next Steps/Features to come:
If flights to the destination are unavailable by the required time then our alternative is a seperate webpage/feature which allows the user to compare timezones and arrange a meeting for optimal productivity and minimal disturbance to one's routine. (Routine, daily work schedule, sleep, planned errands).  Highlighted text field for the optimal meeting time in a workplanner style

## Approach so far (Developer Diary):
Following section explains what we have done and the next tasks to be completed and what has been done
Day 1:  Planned out roles and who focuses on which task the following is based off of the notes I have taken from the last group discussion
Day 3: Tracking progress continue setup and development carrying out assigned rolese
DAy 5: Realised that Aviation feature would not be doable and not meet criteria
Day 6: completely rebuild application from scratch
Day 7: Prep work on Presentation/developing html code
Day 9 start co-coding and presentation rehearsal
DAy 11-13: co code using moment timezone.js for date comparison and finalise speeches 
Day, 14: Presentation and last touch to master branch.
    
Upon discussion our group realised that due how integral the coding would be to itself, requiring several data AJAX calls which would be coded into one another that this would have to be done in one script.js file and all code components had to be in that file to avoid potential erros and headaches further down the line.  IT was decdided to assign david as the main programmer.  At Hebe's request our group assigned her a role which she felt comfortable in tackling, User Interface design, with myself being a code reviewer and tester as well as a secondary technician assisting david with psudocode ideas and design's if he was 'stuck' and livecode together to create functioning features and improve the current model if required. 

Assigned roles:
Hebe - using HTML and a CSS framework create the webpage
David - Jquery Programming
Timothy - Organisational Lead and Code Reviewer 

<p>The URL of the deployed application.
https://dcon0610.github.io/covid19travelplanner/</p>


<p>The URL of the GitHub repository.
https://github.com/dcon0610/covid19travelplanner</p>

Here is the screeshot of covid numbers by country:
![Search for Covid Data](https://github.com/dcon0610/covid19travelplanner/blob/hebe1/asset/Search%20for%20Covid%20Data.png)

Here is the screeshot of flight check information:
![Meeting Schedule](https://github.com/dcon0610/covid19travelplanner/blob/hebe1/asset/Meeting%20Schedule.png)

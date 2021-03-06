
# MoodTracker

![](./public/screenshot.png)

## Project Description
A full-stack application (SPA) with a custom, RESTful API.  A tracker application that allows users to sign up for an account and then record how they are feeling alongside a self-rating on how well they are meeting their basic needs.  This information is then used in a number of data visualizations to help theuser notice patterns and trends in their mental ehalth and general well-being.  This is done in aim of aiding users' agency in facilitating their own self care and other mental health considerations as well.

### Project Links
- [Deployed Client URL](https://srsexton94.github.io/moodtracker-client/)
- [Back End Repo](https://github.com/srsexton94/moodtracker-api)
- [Deployed Server URL](https://moodtracker-api.herokuapp.com/)
- [Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)


## Specifications
* Be a SPA with User Authentication that interacts with a custom API
* use CRUD commands in a SQL database
* Deploy client on GH pages, the server on Heroku, and host on public GitHub page
* Make frequent and cohesive edits throughout the project
* Must provide all authentication actions & 4+ RESTful routes

## Technologies Used in Front End
##### Languages
* HTML5
* CSS3
* JavaScript (ES6)

##### Libraries/Frameworks/etc...
* Sass
* Boostrap
* jQuery
* AJAX
* Handlebars
* cURL
* Chart.js

## Planning and Development
This project, conceived as a game-ified mood tracker, began its planning process with wireframes for the front end design and user stories to guide its development overall.

#### Wireframes
The wireframes for this project proved to be an incredibly useful planning tool, especially in visualizing a clear and logical progression of events as well as general user interface considerations
They can be viewed in the [MoodTracker Wireframe PDF](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A9c7eec20-3b93-4a49-a046-d2e38c279b17)

A [Description of the wireframes](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A64fce2d6-ef36-4cde-a7d5-0c39782ef387) was also provided.  For Legibility it is transcribed below:

###### Wire Frame Description
1) *Title Page* - visible while unauthenticated (main header, sign up nav, sign in nav, about/contact nav)

2) *Sign up* (modal) visible while unauthenticated (name/username/email/password/confirmation inputs, form submit, 'X' out of modal (return))

3) *Sign in* (modal) visible while unauthenticated (username/password inputs, form submitted, 'X' out of modal (nav -> title page), 'Don't have account?' -> sign up)

4) *Main pg pt.1* (needs input) visible while authenticated (hunger/comfort/bladder/energy/fun/social/hygiene/environment input 'bars' (range inputs?))

5) *Main pg pt.2* (mood input) visible while authenticated (select one mood from input options list (radio buttons?), form submit (also resents Main Page))

6) *Calendar* - visible while authenticated (month name, navigation arrows, calendar display, 'x' out (nav -> main), Each day is clickable? (nav -> '7' modals))

7) *Day Modals* - visible while authenticated (display mood to user with overall need bar, 'x' out (nav -> calendar))

8) *Analysis Overview* - visible while authenticated (list of each mood token w/correlated need bar (highest & lowest?), 'x' out (nav -> main page))

9) *Profile Page* - visible while authenticated (name/username/email/password display, update button -> changes displays to input, form submit button, 'x' out (nav -> main page))

10) *About/Contact* - any authentication status ('About Us' paragraph (on dev team), 'Contact Us' form - name/email/message input, Submit form)

#### User Stories
As a user I want to...
(Re: authentication)
- sign up an account that I can use to sign in later
- sign in to an account that I previously signed up with
- update my account information when needed
- sign out completely when I am finished each session
(Re: entries manipulation)
- adjust my needs ratings and overall mood evaluation per submission
- submit an entry which will be accessible/trackable later on
- update/edit prior entries
- View a particular previous entry
- View all of my previous entries
- Delete an entry

#### Problem Solving
In the beginning of this project, in order to approach the task at hand, a rough outline of a possible timetable/progression was laid out:

###### Estimated Timetable

* Generate resources, check migrations
* Write curl scripts
* Write specs, use specs to write...
  - models
  - controllers
  - serializers
* Test with curl scripts
* add/check relationships b/w resources
* make resource controller Protected (or OpenRead?)
  - add user ownership to resource controller
* write jquery/ajax code for api requests, test w/curl
  - authentication
  - resource CRUD
* write event handlers, add navigation events
* work on styling/final touches
* try for stretch goals
  - data visualization/analysis modal?
  - entry log in calendar form?

Given its intended flexibility, the outline was not certainly observed exactly. However it did offer significant utility in outlining the various component parts of the project (in actionable 'steps'), and in emphasizing the relationship between them (so that components that were dependent on others were clearly identifiable as such).

This approach proved most useful in encoutnering further problems.  Many of the difficulties presented in this project's completion were greatly benefitted by breaking down a desired outcome into its internal components, considering dependencies in establishing and maintaining data flow, and refactoring so that the components were individually contained.

#### Going Forward...
Upon initial submission, this project concluded at the creation of the moods resource, an entry log of all mood entries, and a single chart visualizing total mood tallies.  At that time future goals were defined as such...

> Ideally this inital project can be expanded in two (or more!) ways.  Firstly, a data visualizaiton component will greatly aid the overall aim of this application; in making overall trends in the input clear to the user.  At this time of initial production, the app is already able to offer one visualization of the total iterances of an input over their labels.  However more detailed visualizations would greatly aid the application.

> Secondly, a primary future goal of this project is to include an additional user input which records a number of self-assesments where users can rate how well they're meeting a number of their basic needs. This information could then be combined with the concurrent mood input to offer more utility to the user, by helping users notice any correlations between their self care and their mood.

> Beyond those two primary expansions, future development endeavors might consider altering the GET index request (and related handlebars template) so that the entry log displays in a more user-friendly format. Perhaps the entry log could also offer some kind of search criteria/user controls to more quickly search through the entry log and identify a particular entry.


It is with a great sense of accomplishment that, as of this publication - each of those future goals has been met.  Furthermore future development goals might include:
* Offering a more interesting/aesthetically pleasing form for the needs submission (initial intention was to present them in stylized range inputs; however browser compatability issues introduced complications beyond the time constraints of this publication)
* Offering a change for users to edit range inputs alongside mood entry updates
* Improve the appearance of the charts to standardize the X and Y axes, include properly formatted titles, and a more appropriately sized legend

This project's current presentation is the product of much effort and pride on the part of the developer and concludes with sincere and plentiful thanks for your time and consideration. All feedback and contributions will be dutifully reviewed and greatly appreciated.

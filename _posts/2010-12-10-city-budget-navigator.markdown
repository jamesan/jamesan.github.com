---
layout:     project
head:       my portfolio
id:         project
categories: [project]

hide_title: yes

main_format: png

status:     In progress
intent:     Pro bono
work:       [Develop, Research]
techs:      [CSS, Javascript, jQuery, XHTML]
address:    http://github.com/jamesan/citybudget
---
The City Budget Navigator was a project proposed as part of Toronto's participation in both the [International Open Data Hackathon](http://www.opendataday.org/) and the [Random Hacks of Kindness 2.0](http://www.rhok.org/events/rhok-2/) (RHoK), both of which occurred simultaneously on December 4 and 5, 2010.

The goal was to "Create visualization tools to help citizens navigate the City of Toronto's $9.2 billion operating budget".[^1]

The timeline was particularly fitting due to the timeframe for the City of Toronto's 2011 budget schedule was slated to begin in mid-January 2011. The aim was to create proof-of-concept visualizations to demonstrate value in releasing the city's budget data in a machine-readable and public format to help foster civic engagement with the budget process.

The project was inspired by both the London, Ontario initiative to create a public London City Budget API and the spending review tool created by guardian.co.uk, a world-leading online newspaper owned by The Guardian.

This project was not just a software development challenge. The approach was to scrape and parse PDF reports of the city budget, create or adopt a data schema and store this budget data, build a public API to access this data, and publish demo visualizations on how the data can be mashed and visualized.

Over the two days, some thousands of budget figures were parsed using both manual and automatic means.[^2] The London City Budget API was forked and then refactored into a RESTful web service implemented in Drupal. And a very basic exploration tool was created using [JavaScript InfoVis Toolkit](http://thejit.org/)'s TreeMap visualization. Mockups for a public facing site were being developed by the end of RHoK.

This project has been effectively placed on hold. since mid-January.

[^1]: [City Budget Navigator - Opendataday](http://www.opendataday.org/wiki/City_Budget_Navigator)
[^2]: [City Budget Navigator data](https://spreadsheets.google.com/ccc?key=0AqAzr4q8YMGTdHlaeUs2d1pzTG9pQjc2bDZ5b0tPSnc&hl=en&authkey=CNTC_6QK#gid=1)
*[RHoK]: Random Hacks of Kindness
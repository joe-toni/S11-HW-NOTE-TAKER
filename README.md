# S11-HW-NOTE-TAKER    

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        
##  Description
This application is ment to take a users input an save it into a database file on the server side of a deployed site. We were tasked with developing a starter code which already provided the client side interface and public file. The only thing left to do was create a server.js file that would properly handle the information that needed to be sent to or taken from the client. Information in both cases took the form of json objects and our server would either send all collected and id'd notes through a get route that read in the db file every time it was called or add new entries to the db through a post route that would also read the file creating an array of the existing objects, pushing in the new one then rewriting the whole thing back into the db. In addition to this a delete route was developed using a similar method but instead of adding to the array a post containing the requested id was filtered out before the resulting array was rewriten back onto the db. 

-----

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Testing](#testing)
-[Contributing](#contributing)
-[Questions](#questions)
-[License](#license)

---

### Installation

The site is currently diployed on heroku so no installation is needed. To access the applictions front end functionallity simply go to the link provided in the description. If you wish to view an run the back end on a localhost server the application can be run using node and requires express. The express package is listed as a dependancy in the directory's package.json file to the user should simply be able to run npm install.

---

### Usage

This application can be used to save notes online but used a single db file to saved any entries so personal entries can be viewed and deleted by any other user and uppon opening the app the user may find other notes have been added.

---

### Testing

 If the user wishes to try the live client side program they can view it at the link provieded in the description.

 ---

 ### Contributing

No contribution is needed for the project at the moment.

---

### Questions

If you'd like to see more of my work feel free to check out my [GitHub](https://github.com/joe-toni) account.
Or if you have any questions you can contact me at this [Email](mailto:joefaburrieta@gmail.com) Address.

---

### License

Licensed under The Unlicense
For more details visit: https://unlicense.org/


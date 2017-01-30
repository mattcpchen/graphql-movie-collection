## GraphQL-Movie-Collection
The purpose of this app is to demonstrate how to set up a simple GraphQL server. 
In this project, We’ll write a small GraphQL server, create an app to browse and build
our own movie collection by requesting data from the most popular database Movie Database(TMDb).
<br><br>
React and Redux are used as the front-end framework of this project. However, these two libraries don't 
coordinate pretty well. A library called "react-router-redux" is used to help us keep that bit of state 
in sync with our Redux store. This library is not necessary cause using Redux and React Router directly 
and write a reducer to track the current location will work just fine, but it save a lot of hassle. For more
information regarding this library, please visit its github page.


<br>
![Screenshot_01](/public/assets/readme_01.jpg?raw=true)
<br><br>
![Screenshot_02](/public/assets/readme_02.jpg?raw=true)

https://graphql-movie-collection.herokuapp.com/

## Getting Started
<ul>
    <li><b>npm run dev:client</b>: development for client-side code only</li>
    <li><b>npm run dev:server</b>: development for server-side code only</li>
    <li><b>npm run dev</b>: development for both client && server-side code</li>
    <li><b>npm run build</b>: build the app for production</li>
    <li><b>npm run start</b>: run the exisitng build</li>
    <li><b>npm run build:start</b>: build the app and run</li>
</ul>
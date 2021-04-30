Spotify Artist Tracker

This program allows a user to enter in the name of an artist and display a variety of information regarding said artist.

In order to run said program first thing you need to do is download #web-api-auth-examples-master

Run the program by "cd web-api-auth-examples-master" -> "cd authorization_code" -> node app.js

It will run off on https://localhost:8888 . There go to the page url and copy the string following accessToken and paste it in src/img/App.js under accessToken = "".

After this you can either run. 

!To Run in Dev Mode (Note: In dev mode there are know errors with entering in a blank character and a mishmash of characters into the search bar. To avoid this run the program in build mode)
''npm install
  npm start

!To run in build mode
''npm run build
  npm instal -g serve
  serve -s build


  This app is currently deployed to github and heroku

  Link to heroku page, https://artist-player.herokuapp.com/



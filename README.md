# Music Spotify Player

Music player app made with React. It uses Spotify API to generate tracks and artists. User can search for an artist. After the search, information about artist and top 10 tracks of that artist are shown. User can play and pause those tracks.
To generate starting files I used create-react-app.

## 1. Getting Spotify access token

In order to make this app work, Spotify access token is needed. Token expires after 1 hour. 

### 1.1. Login/Sign Up to Spotify

Here is the [link](https://developer.spotify.com/my-applications/). After you login/sign up, create an app. Now you can get your Client ID & Client Secret. You will also have to configure Redirect URIs, for example: http://localhost:8888/callback/.

![spotify sajt](https://user-images.githubusercontent.com/21371592/29612125-745cbbf2-8800-11e7-9238-474b01e0e9a8.jpg)

### 1.2. Now get the token

From [this link](https://github.com/spotify/web-api-auth-examples) download github repository. After that, do:
```
npm install
```
When you finish installing, search for file app.js inside authorization_code folder. Change those 3 lines:

![app js fajl](https://user-images.githubusercontent.com/21371592/29612191-aa01f984-8800-11e7-99a2-83d6ecb4197c.jpg)

Then, open terminal inside authorization_code folder. There:

```
node app.js
```

### 1.3. Open localhost:8888















------

Spotify Artist Tracker

This program allows a user to enter in the name of an artist and display a variety of information regarding said artist.

In order to run said program first thing you need to do is download #web-api-auth-examples-master

Run the program by "cd web-api-auth-examples-master" -> "cd authorization_code" -> node app.js

It will run off on https://localhost:8888 . There go to the page url and copy the string following accessToken and paste it in src/img/App.js under accessToken = "".

After this you can either run. 

!To Run in Dev Mode
''npm install
  npm start

!To 


Open localhost:8888, click on the button Log In with Spotify, fill in the form, after that copy the token that's in search bar of your browser, for example:

![copy access token iz search bara](https://user-images.githubusercontent.com/21371592/29612213-c1fb3a64-8800-11e7-901d-982a6a0c49e5.jpg)

## 2. Spotify Music Player App

### 2.1. Installing

Run: 
```
npm install
```

### 2.2. Change the token
Now paste token as a string, inside file src/App.js, into the variable called accessToken. Here:

![paste token here](https://user-images.githubusercontent.com/21371592/29612167-9a286b74-8800-11e7-9356-5c4345ecfc5c.jpg)

### 2.3. Starting the app
Finally, start the app with:
```
npm start
```
The dev server runs on port 3000.

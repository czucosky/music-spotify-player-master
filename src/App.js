import React, { Component } from 'react';
import './App.css';

import Profile from './Profile';
import Gallery from './Gallery';

// function popUpfunc(){ //New
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null, //IMPORTANT
      tracks: []
    }
  }


  // MAIN SEARCH FUNCTION
  search() {
    //-----------API SETUP-----------
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

    /*
      accessToken expires every one hour. 
      In order to get accessToken start "web-api-auth-examples"
    */


    let accessToken = 'BQAsq6ctxvIZ5bJWEdTf4E71Xscnd6aRhWtRStwbyrMQ0uFCf2si7jociFsD_OqrYyj2mSvBzAe2Mzr45i7pMcXtmSyeLjudb9HlLf-bPNZsz-aTQ4eusml7lQb6_6MhEBQYRJNCBrrN7ihB6XB3fSnH0SnIeNn_K1Znx-Morhl8YMOSvOydRw';
  


    let myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };
   // FETCH!!!!
    fetch(FETCH_URL, myOptions)
    .then(response => response.json())
    .then(json => {


      const artist = json.artists.items[0];        
      this.setState({ artist });
      
      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
      fetch(FETCH_URL, myOptions) 
      .then(response => response.json())
      .then(json => {
        const { tracks } = json;
        this.setState({tracks});
      })

    });

  }

  render() {
    return (
      <div className="App">
        <h2>&#9733; Music Spotify Player &#9733;</h2>

          <div className="InputGroup">
            <input
              type="text"
              placeholder="Search for an artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={
                event => {
                  if(event.key === 'Enter') {
                    this.search()
                  }
                }
              }
            />
            <button onClick={ () => this.search()}>
              <img src={require('./img/search.png')} alt="search"/>
            </button>
          </div>

          {
            this.state.artist !== null 
            ? <div>
                <Profile
                  artist={this.state.artist}
                />

                <Gallery 
                  tracks={this.state.tracks}
                />
              </div>
            : <p></p>
          }
      </div>
    );
  }
}

export default App;

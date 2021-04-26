import React, { Component } from 'react';
import './App.css';

import Profile from './Profile';
import Gallery from './Gallery';




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


    let accessToken = 'BQBjrQbmpOn9q8Rhns6EFQUd0Hdm0rUItjLxbt3NvYMMe2Z4qNbN7G-Ywn4t7fqtkxHg9ayX_yEKNykrCAhOU1KOe0BNNHjXfd8IV1hmoWHv9Esqkxjiq7695PV-F26lXZ7i75WMkJ4iOEXiL_GTSVXFzpvZP1IBdl0s5Tp8tWhLtzZ-Mz6JfQ';
  


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

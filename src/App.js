import React, {Component} from 'react';
import logo from './spotify.svg';
import {authURL, preservedState} from "./authorize";
import {checkState, access_token} from "./processToken";
import './App.css';

class App extends Component {
  constructor (){
      super();
      this.state = {
          token: null,
          top_artist: "",
          artist_image: "",
      };
      this.getTopArtist = this.getTopArtist.bind(this);
      this.checkToken = this.checkToken.bind(this);
  }
  componentDidMount(){
    if(access_token){
        this.setState({
            token: access_token
        });
        this.getTopArtist(access_token);
    }
    this.interval = setInterval(() => this.checkToken(), 3000);
  }
  checkToken(){
    if(this.state.token){
        this.getTopArtist(this.state.token);
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  getTopArtist(token){

  }
  render (){
    return (
        <div className="App">
            <header className="App-header">
            {!this.state.token && (
                <div className="Intro">
                    <img src={logo} className="App-logo" alt="logo" />
                    <a className = "log-in-spotify"
                        href = {`${authURL}`}>
                            Sign in to Spotify
                    </a>
                    <p>
                        Let's get to know your top artist!
                    </p>
                </div>
            )}
            {this.state.token && (
                <div className="Final">
                    <h1>And your top artist is: </h1>
                    <h2>{this.state.top_artist} </h2>
                    <img src={`${this.state.artist_image}`} alt = "Artist" />
                </div>
            )}
            </header>
        </div>
    );
  }
}

export default App;

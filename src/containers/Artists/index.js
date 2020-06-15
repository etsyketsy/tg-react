import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Artist from '../Artist/index.js';
import artistData from '../../assets/artistData.js';


class Artists extends Component {

  state = {
    artists: null
  }

  componentDidMount() {
    this.setState(
      {artists: artistData}
    )
  }

  render() {

    return (
      // Check for artist data in state
      (!this.state.artists) ?
        <p id='loading'>loading...</p>
        :
        <div className="content" id="artists">
          <div className="sectionHeader">// Artists</div>
          <div className="displayGrid">
            {
              this.state.artists.map(
                (artist, index) => {
                  // List only artists, not affiliates
                  if (artist.artist_type === 'artist') {
                    return (
                        <Artist
                          item={artist}
                          key={index}
                          id={index}
                        />
                    )
                  }
                  else return null;
                }
              )
            }
          </div>
        </div>
    )
  }
}

export default withRouter(Artists);

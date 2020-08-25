import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ArtistPreview from '../ArtistPreview/index.js';
import artistData from '../../assets/artistData.js';
import ScrollToTop from '../ScrollToTop/index';


class Artists extends Component {

  state = {
    artists: null
  }

  componentDidMount() {
    // Sort artists by name and set to state for processing
    let sortedArtists = artistData.sort((x, y) => {
      let a = x.artist.toLowerCase(),
          b = y.artist.toLowerCase();

          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
    });

    this.setState(
      {artists: sortedArtists}
    )
  }

  render() {

    return (
      // Check for artist data in state
      (!this.state.artists) ?
        <p id='loading'>loading...</p>
        :

        <div className="content" id="artists">
          <div className="sectionHeader">{'//'} Artists</div>
          <div className="displayGrid">
            {
              this.state.artists.map(
                (artist, index) => {
                  // List only artists, not affiliates or unannouncd artists
                  if (artist.artist_type === 'artist' && artist.status !== 'Unannounced') {
                    return (
                      <Link to={{
                        pathname: `/artists/${artist.artist_nice_name}/`,
                      }}
                        key={index}
                      >
                        <ArtistPreview
                          item={artist}
                          key={index}
                          id={index}
                        />
                        </Link>
                    )
                  }
                  else return null;
                }
              )
            }
          </div>
          <ScrollToTop />
        </div>
    )
  }
}

export default withRouter(Artists);

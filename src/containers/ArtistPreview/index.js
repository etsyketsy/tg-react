import React, { Component } from 'react';
import './index.css';

// Display Artist Tile for preview and All Artists pages
class ArtistPreview extends Component {
  
  render() {
    return (
      <div className="artistPreview" id={this.props.index}>
          <img src={this.props.item.image}
            alt='img'
            className='artistPhoto'
          />
          <div className="desc">
          <div className='name'>
            {this.props.item.artist}
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistPreview;
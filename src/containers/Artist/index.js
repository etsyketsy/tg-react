import React, { Component } from 'react';
import './index.css';

// Display Artist Tile for preview and All Artists pages
class Artist extends Component {

  render() {
    console.log(this.props.item)
    return (
      <div className="artistSlide" id={this.props.index}>
        <div className="desc">
          <div className='name'>
            {this.props.item.artist}
            <br />
            <div className='location'>{this.props.item.artist_location}
            </div>
          </div>
          <img src={this.props.item.image} alt='img' className='artistPhoto' />
        </div>
        <div className='bio'>
          {this.props.item.artist_bio}
        </div>
      </div>
    )
  }

}

export default Artist;
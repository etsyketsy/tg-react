import React, { Component } from 'react';
import './index.css';

class ReleaseTile extends Component {

    render() {
        return (
            <div id="releaseTile">
                <img className='photoPreview'
                    src={this.props.item.image}
                    alt='releaseCover' />
                {/* <div id='preview_info'> */}
                    <div className='preview_title'>
                        {this.props.item.release_title}
                    </div>
                    <div className='preview_artist'>
                        by {this.props.item.artist}
                    </div>
                {/* </div> */}
                <div id='full_info'>
                    <div className='release_title'>
                        {this.props.item.release_title}
                    </div>
                    <div className='release_artist'>
                        by {this.props.item.artist}
                    </div>
                    <div className='release_bio'>
                        {this.props.item.bio}
                    </div>
                </div>
            </div>
        )
    }
}

export default ReleaseTile;

import React, { Component } from 'react';
import './index.css';

class ReleaseTile extends Component {

    clickHandler = (e) => {
        console.log(e.currentTarget)
    }
    render() {
        return (
            <div id="releaseTile">
                <a href='#full_info'
                    onClick={this.clickHandler}
                >
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
                </a>
                <div id='full_info'>
                    <a href='closeDetail'>
                        {this.props.item.bio}
                    </a>
                </div>
            </div>
        )
    }
}

export default ReleaseTile;

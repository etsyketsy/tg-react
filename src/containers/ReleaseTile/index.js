import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleaseTile extends Component {

    render() {
        return (
            <div id="releaseTile">
                <img src={this.props.item.image}
                    alt='releaseCover'
                />
                <div id='releaseDetails'>
                    <div id='releaseHeadline'>
                        <div id='cat_num'>
                            {this.props.item.cat_num}:
                        </div>
                        <div id='releaseArtist'>
                            {this.props.item.artist} - 
                        </div>
                        <div id='releaseTitle'>
                            {this.props.item.release_title}
                        </div>
                    </div>
                    <div id='releaseBio'>
                        {ReactHtmlParser(this.props.item.bio)}
                    </div>
                    <div className='tracks'>
                        <div id='tracksHeader'>Tracks</div>
                        {ReactHtmlParser(this.props.item.tracklisting)}
                    </div>
                </div>

            </div>
        )
    }
}

export default ReleaseTile;
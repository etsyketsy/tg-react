import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleasePreview extends Component {

    render() {
        return (
            <div id="releasePreview">
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
                <div className='mediaPlayer'>
                    {ReactHtmlParser(this.props.item.mediaplayer_html)}
                </div>
            </div>
        )
    }
}

export default ReleasePreview;

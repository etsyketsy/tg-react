import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleasePreview extends Component {

    render() {
        console.log(this.props.item)
        return (
            <div className="releasePreview">
                <div className='releaseHeadline'>
                    <div className='cat_num'>
                        {this.props.item.cat_num}:
                        </div>
                    <div className='releaseArtist'>
                        {this.props.item.artist} -
                        </div>
                    <div className='releaseTitle'>
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

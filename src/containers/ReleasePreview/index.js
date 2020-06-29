import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleasePreview extends Component {

    render() {
        return (
            <div className='releasePreviewWrapper'>
                <Link
                    to={`/releases#${this.props.item.cat_num}`} className="releasePreview"
                >
                    <img src={this.props.item.image}
                        alt='releaseCover'
                    />
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
                    </Link>
                <div className='mediaPlayer'>
                    {ReactHtmlParser(this.props.item.mediaplayer_html)}
                </div>
               
            </div>
        )
    }
}

export default ReleasePreview;

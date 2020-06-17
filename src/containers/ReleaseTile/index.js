import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleaseTile extends Component {

    linkRelease = (e) => {
        console.log(e.target.id)
        this.props.history.push('')
    }

    render() {
        return (
            <Link to={{
                pathname: `/releases/`
            }}
            >
                <div className="releaseTile" id={this.props.item.cat_num}>
                <img src={this.props.item.image}
                    alt='releaseCover'
                />
                <div className='releaseDetails'>
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
                        <div className='releaseFormats'>
                            {this.props.item.release_formats}
                        </div>
                    </div>
                    <div className='releaseBio'>
                        {ReactHtmlParser(this.props.item.bio)}
                    </div>
                    <div className='tracks'>
                        <div className='tracksHeader'>Tracks</div>
                        {ReactHtmlParser(this.props.item.tracklisting)}
                    </div>
                    <div className='mediaPlayer'>
                        {ReactHtmlParser(this.props.item.mediaplayer_html)}
                    </div>
                </div>
            </div>
        </Link >
        )
    }
}

export default ReleaseTile;

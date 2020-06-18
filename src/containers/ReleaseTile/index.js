import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleaseTile extends Component {

    state = {
        expanded: false
    }

    tracksClickHandler = () => {
        this.setState(
            { expanded: !this.state.expanded }
        )
    }

    render() {
        let toggledClass = this.state.expanded ? 'expanded' : 'collapsed';

        return (
            <Link to={`/releases#${this.props.item.cat_num}`}>
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
                            <div className='releaseDate'>
                                <div className='dateHeader'>Released:</div>
                                {this.props.item.release_date}
                            </div>
                            {ReactHtmlParser(this.props.item.bio)}
                        </div>
                        <div className='media'>
                            <div className='mediaPlayer'>
                                {ReactHtmlParser(this.props.item.mediaplayer_html)}
                            </div>
                            <div className='tracks'>
                                <button className='tracksHeader'
                                    onClick={this.tracksClickHandler}>
                                    {!this.state.expanded ? 'See tracks'
                                        : 'x'}
                                </button>
                                <div className={`tracks ${toggledClass}`}>
                                    {ReactHtmlParser(this.props.item.tracklisting)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Link >
        )
    }
}

export default ReleaseTile;

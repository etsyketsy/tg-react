import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './index.css';


class ReleaseTile extends Component {

    state = {
        expanded: false
    }

    tracksClickHandler = (e) => {
        this.setState(
            { expanded: !this.state.expanded }
        )
    }

    // componentDidMount() {
    //     document.body.style.overflow = "hidden"
    // }

    render() {
        let toggledClass = this.state.expanded ? 'expanded' : 'collapsed';
        console.log(this.props.item)
        return (
            <div className="releaseTile" id={this.props.item.cat_num}>
                <img src={this.props.item.image}
                    alt='releaseCover'
                />
                <div className='releaseDetails'>
                    <div className='releaseHeadline'>
                        <div className='cat_num'>
                            {this.props.item.cat_num}:
                        </div>
                         <Link 
                            to={`/artists/${this.props.item.artist_nice_name}/`}
                            className='releaseArtist'  
                        >
                            {(this.props.item.artist.length >= 2) ?
                                `${this.props.item.artist[0]} & ${this.props.item.artist[1]}`
                                :
                                this.props.item.artist
                            }
                        </Link>
                        &nbsp;-&nbsp;
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
                            <div className='tracksHeader'
                                onClick={this.tracksClickHandler}>
                                {!this.state.expanded ?
                                    'See tracks'
                                    : 'x'}
                            </div>
                            <div className={`tracks ${toggledClass}`}>
                                {ReactHtmlParser(this.props.item.tracklisting)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default ReleaseTile;

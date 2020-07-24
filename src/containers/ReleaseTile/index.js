import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './index.css';


class ReleaseTile extends Component {

    state = {
        expanded: false
    }

    // getSplitArtistLinks = (props) =>{
    //     (props.item.artist >= 2) ?
    // }

    getSplitArtists = (props) => {
        // Get array of artist nice names and match against artists in the artist name array
        let artistNiceNames = this.props.item.artist_nice_name.split("_");

        let splitLinks = [];
        artistNiceNames.forEach(
            (niceName) => {
                for (let i = 0; i < this.props.item.artist.length; i++) {
                    for (let j = 0; j < artistNiceNames.length; j++) {
                        let test = this.props.item.artist[j][0].toLowerCase();
                        if (test == niceName[i]) {
                            splitLinks.push(
                                {
                                    url: niceName,
                                    name: this.props.item.artist[j]
                                }
                            )
                        }
                    }

                }
            }
        )

        // Return Artist text with links to correct artist pages based on the splitting done above
        return (
            <div className='splitArtistsWrapper'>
                <Link
                    to={`/artists/${splitLinks[0].url}/`}
                    className='releaseArtistWrapper'
                >
                    {splitLinks[0].name}
                </Link>
                &nbsp;&&nbsp;
                 <Link
                    to={`/artists/${splitLinks[1].url}/`}
                    className='releaseArtistWrapper'
                >
                    {splitLinks[1].name}
                </Link>
            </div>
        )
    }



    tracksClickHandler = (e) => {
        this.setState(
            { expanded: !this.state.expanded }
        )
    }

    render() {
        let toggledClass = this.state.expanded ? 'expanded' : 'collapsed';

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
                        {(this.props.item.artist.length >= 2) ?
                            this.getSplitArtists()
                            :
                            <div className='artistWrapper'>
                            <Link
                                to={`/artists/${this.props.item.artist_nice_name}/`}
                                className='releaseArtistWrapper'
                            >
                                {this.props.item.artist}
                            </Link>
                            </div>

                        }
                        <div> - </div>
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
                                    '> See tracks'
                                    : '<'}
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

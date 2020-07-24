import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleasePreview extends Component {

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
                {splitLinks[0].name}&nbsp;&&nbsp;{splitLinks[1].name}
            </div>
        )
    }

    render() {
        return (
            <div className='releasePreviewWrapper'>
                <Link
                    to={`/releases#${this.props.item.cat_num}`} className="releasePreview"
                >
                    {/* <img src={this.props.item.image}
                        alt='releaseCover'
                    /> */}
                    <div className='releaseHeadline'>
                        <div className='cat_num'>
                            {this.props.item.cat_num}:
                        </div>
                        {(this.props.item.artist.length >= 2) ?
                            this.getSplitArtists()
                            :
                            <div className='artistWrapper'>
                                {this.props.item.artist}
                            </div>
                        }
                        <div> - </div>
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

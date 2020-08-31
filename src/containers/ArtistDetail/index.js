import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';
import ReleasePreview from '../ReleasePreview/index';
import releaseData from '../../assets/releaseData';
import artistData from '../../assets/artistData';
import NotFound from '../NotFound';

class ArtistDetail extends Component {
    state = {
        item: null
    }

    // Uses artist status as proxy for existence of artis. Returns 'NotFound' if not
    artistCheck = (artistInfo) => {
        if (artistInfo.status !== "Active" && artistInfo.status !== "Inactive") {
            return false
        } else {
            return true
        }
    }

    // Returns empty div if image doesn't exist so no broken images are shown
    imageCheck = (artistInfo) => {
        if (!artistInfo.image) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <img 
                    src={this.state.item.image} 
                    alt='img' 
                    className='artistPhoto' 
                />
            )
        }
    }

    // Find artist details from Artist Data based on nice name passed in URL
    getArtist = (niceName) => {
        
        return new Promise((resolve, reject) => {
            let currentArtist = artistData.filter(
                artist => artist.artist_nice_name === niceName.toLowerCase()
            )
            if (currentArtist[0]){
                this.setState(
                    { item: currentArtist[0]}
                )
                this.getReleases(currentArtist[0].artist)
                resolve();
            } else {
                this.setState(
                    { item: null}
                )
                reject('Artist not found')
            }

        }

        )
    }

    // After artist is found, set artist's announced releases to state 
    getReleases = (artistName) => {
        return new Promise((resolve, reject) => {
            let releases = releaseData.filter(
                release => release.artist.includes(artistName) && release.status 
                    !== 'Unannounced'
            );
            if (releases){
                this.setState({
                    releases: releases
                }) 
                resolve();
            } else {
                reject('Release(s) not found')
            }

        }
        )
       
    }

    exitHandler = (props) => {
        // Clicking the exit will push user back to All Artists or homepage 
        // depending on user's path indicated by pop/push action of the history
        
        // POP indicates user routed to the exact url likely from outside of TG
        // PUSH indicates user routed from a link on TG site
        (this.props.history.action === "POP") ?
            this.props.history.push('/artists')
            :
            this.props.history.goBack()
    }

    componentDidMount() {
        // Component was loading with window at previous scroll position
        // This will make sure the new component loads at the top of the page
        window.scrollTo(0, 0); 

        // Pulls nice name from url params
        let niceName = this.props.match.params.artist_nice_name;
        this.getArtist(niceName)
    }

    render() {
        return (
            (!this.state.item) ?
                <p id='loading'>loading</p>
                :
                (this.artistCheck(this.state.item)) ?
                    <div className="artistDetail" id={this.props.index}>
                        <div id='backButton' onClick={this.exitHandler}>&#8592;</div>
                        <div className="desc">
                            <div> 
                                {this.imageCheck(this.state.item)}
                            </div>
                       
                            <div className='name'>
                                {this.state.item.artist}
                                <br />
                                <div className='location'>{this.state.item.artist_location}
                                </div>
                            </div>
                        </div>
                        <div className='bio'>
                            {ReactHtmlParser(this.state.item.artist_bio)}
                        </div>
                        <div className="sectionHeader">{'//'}Releases</div>
                        <div className="artistReleases">
                            {this.state.releases.map(
                                (release, index) => {
                                    return (
                                        <ReleasePreview
                                            item={release}
                                            id={release.cat_num}
                                            key={index}
                                        />
                                    )
                                }
                            )}
                        </div>
                    </div>
                    :
                    <NotFound />
        )
    }
}


export default ArtistDetail;
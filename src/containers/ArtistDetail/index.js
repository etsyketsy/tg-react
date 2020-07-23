import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';
import ReleasePreview from '../ReleasePreview/index';
import releaseData from '../../assets/releaseData';
import artistData from '../../assets/artistData';

class ArtistDetail extends Component {
    state = {
        item: null
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
                <img src={this.state.item.image} alt='img'      className='artistPhoto' />
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
                reject('Artist not found')
            }

        }

        )
    }

    // After artist is found, filter through Releases to find any release related to the artist
    getReleases = (artistName) => {
        return new Promise((resolve, reject) => {
            let releases = releaseData.filter(
                release => release.artist.includes(artistName) && release.status != 'Unannounced'
               
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
        // Clicking the exit will push user back to All Artists or homepage depending on user's path indicated by the pop or push action of the history
        
        // POP indicates user routed to the exact url likely from outside of TG
        // PUSH indicates user routed from a link on TG site
        (this.props.history.action === "POP") ?
            this.props.history.push('/artists')
            :
            this.props.history.goBack()
    }

    componentDidMount() {
        // (typeof this.props.location.state === 'undefined') ?
        let niceName = this.props.match.params.artist_nice_name;
       
        this.getArtist(niceName)
        
        // :
      
        // console.log(this.state)
        // // 

        // this.setState({
        //     item: this.props.location.state.artist
        // })
        // // this.getReleases();
    }

    render() {
        return (
            (!this.state.item) ?
                <p id='loading'>still thinking...</p>
                :
                <div className="artistDetail" id={this.props.index}>
                    <button onClick={this.exitHandler}>&#8592;</button>
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
                    <div className="sectionHeader">//Releases</div>
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
        )
    }
}


export default ArtistDetail;
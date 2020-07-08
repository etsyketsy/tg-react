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

    getArtist = (niceName) => {
        let currentArtist = artistData.filter(
            artist => artist.artist_nice_name === niceName
        )
        this.setState(
            { item: currentArtist[0] }
        )
    }

    getReleases = (niceName) => {
        let releases = releaseData.filter(
            release => release.artist_nice_name === niceName
        );
        this.setState({
            releases: releases
        })
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
        console.log(this.props)
        this.getArtist(niceName)
        this.getReleases(niceName)
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
                <p id='loading'>HELLO</p>
                :
                <div className="artistDetail" id={this.props.index}>
                    {/* <button onClick={this.exitHandler}>&#215;</button> */}
                    <button onClick={this.exitHandler}>&#8592;</button>
                    <div className="desc">
                        <img src={this.state.item.image} alt='img' className='artistPhoto' />
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
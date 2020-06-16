import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';
import ReleaseTile from '../ReleaseTile/index';
import releaseData from '../../assets/releaseData';

class ArtistDetail extends Component {
    state = {
        item: null
    }

    getReleases = (props) => {
        
        let releases = releaseData.filter(release => release.artist_nice_name === this.props.location.state.artist.artist_nice_name
        );
        this.setState({
            releases: releases
        })
    }

    exitHandler = (props) => {
        // Clicking the exit will push user back to All Artists or homepage depending on user's path
        (!this.props.location.state) ?
            this.props.history.push('/artists')
            :
            this.props.history.goBack()
    }

    componentDidMount() {
        (!this.props.location.state) ?

            fetch(`http://localhost:8000/api/artists/${this.props.match.params.artist_nice_name}/`)
                .then(response => response.json())
                .then(data => {
                    this.setState(
                        { item: data[0] }
                    )
                })
            :
            this.setState({
                item: this.props.location.state.artist
                // releases: releaseData.reduce()
            })
            this.getReleases();
    }

    render() {
        return (
            (!this.state.item) ?
                <p id='loading'>loading...</p>
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

                    <div className="artistReleases">
                        {this.state.releases.map(
                            (release, index) => {
                                return(
                                    <ReleaseTile 
                                     item={release}
                                     id={index}
                                     key={index}
                                     />
                                 )
                            }
                            
                        )}
                        !!!Releaes will go here
                    </div>
                </div>
        )
    }
}


export default ArtistDetail;
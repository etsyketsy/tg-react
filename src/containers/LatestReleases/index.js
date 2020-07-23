import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReleasePreview from '../ReleasePreview/index.js';
import releaseData from '../../assets/releaseData.js';


class LatestReleases extends Component {

    state = {
        itemsToRender: 3,
        releases: null
    }

    componentDidMount() {
        let filteredReleases = releaseData.filter(
            release =>  release.status != 'Unannounced'
        );

        this.setState(
            { releases: filteredReleases }
        )
    }

    render() {
        return (
            (!this.state.releases) ?
            <p id="loading">loading...</p>
            :
            <div className="preview" id="latestReleases">
                 <div className="sectionHeader">// Latest Releases</div>
                <div className="displayGrid">
                    {
                        this.state.releases.slice(0, this.state.itemsToRender).map(
                            (release, index) => {
                                return (
                                    <ReleasePreview
                                        item={release}
                                        id={index}
                                        key={index}
                                    />
                                )    
                            }
                        )
                    }
                </div>
                <Link to="/releases" replace id="releasesLink">all releases</Link>
            </div>
        )
    }
}

export default LatestReleases;
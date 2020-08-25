import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReleasePreview from '../ReleasePreview/index.js';
import releaseData from '../../assets/releaseData.js';


class LatestReleases extends Component {

    state = {
        itemsToRender: 6,
        releases: null
    }

    sortByReleaseDate = (releases)  => {
        // Sort releases by Release Date
        // First converts release_date from a string to date format for sorting
        let sortedReleases = releases.sort((x, y) => {
            let a = new Date(x.release_date),
                b = new Date(y.release_date);
            return b - a;
        });
        this.setState(
            { releases: sortedReleases }
        )
    }

    componentDidMount() {
        let filteredReleases = releaseData.filter(
            release =>  release.status != 'Unannounced'
        );

        this.sortByReleaseDate(filteredReleases)
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
                <Link to="/releases" replace id="releasesLink">> all releases</Link>
            </div>
        )
    }
}

export default LatestReleases;
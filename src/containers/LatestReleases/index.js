import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReleasePreview from '../ReleasePreview/index.js';
import releaseData from '../../assets/releaseData.js';


class LatestReleases extends Component {

    state = {
        itemsToRender: 3,
        releases: null
    }

    componentDidMount() {
        this.setState(
            { releases: releaseData }
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
                                    <Link
                                        to={{
                                            pathname: `/releases/${release.cat_num}/`,
                                            state: { release }
                                        }}
                                        key={index}
                                    >
                                        <ReleasePreview
                                            item={release}
                                            id={index}
                                            key={index}
                                        />
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
                <Link to="/releases" replace id="releasesLink">ALL RELEASES</Link>
            </div>
        )
    }
}

export default LatestReleases;
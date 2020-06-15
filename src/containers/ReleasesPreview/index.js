import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReleaseTile from '../ReleaseTile/index.js';
import releaseData from '../../assets/releaseData.js';


class ReleasesPreview extends Component {

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
            <p id='loading'>loading...</p>
            :
            <div className="preview" id="releasesPreview">
                 <div className="sectionHeader">// Latest Releases</div>
                <div className="displayGrid">
                    {
                        this.state.releases.reverse().slice(0, this.state.itemsToRender).map(
                            (release, index) => {
                                console.log(release)
                                return (
                                    <Link
                                        to={{
                                            pathname: `/releases/${release.cat_num}/`,
                                            state: { release }
                                        }}
                                        key={index}
                                    >
                                        <ReleaseTile
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
                <Link to="/releases" replace>ALL RELEASES</Link>
            </div>
        )
    }
}

export default ReleasesPreview;
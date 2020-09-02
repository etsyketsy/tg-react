import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReleaseTile from '../ReleaseTile/index.js';
// import ReleaseDetail from '../ReleaseDetail/index.js';
import releaseData from '../../assets/releaseData.js';
import ScrollToTop from '../ScrollToTop/index';



class Releases extends Component {
    state = {}


    componentDidMount() {
        // Checks url for Release link and makes sure window opens at top if not routing to specific release
        if (this.props.location.hash.length === 0) {
            window.scrollTo(0, 0); 
        }
        // Sort releases by Release Date
        // First converts release_date from a string to date format
        let sortedReleases = releaseData.sort((x, y) => {
            let a = new Date(x.release_date),
                b = new Date(y.release_date);
            return b - a;
        });
        this.setState(
            { releases: sortedReleases }
        )
    }

    // Renders release display grid with all releases if no item is selected
    render() {

        return (
            (!this.state.releases) ?
                <p id='loading'>loading...</p>
                :
                <div className="content" id="releases">
                    <div className="sectionHeader">{'//'} Releases</div>
                        {this.state.releases.map(
                            (release, index) => {
                                // Filter out unannounced releases
                                if (release.status !== 'Unannounced') {
                                    return (
                                            <ReleaseTile
                                                item={release}
                                                id={release.cat_num}
                                                key={index}
                                            />
                                    )
                                }
                                else return null;
                            }
                        )
                        }
                        <ScrollToTop />
                </div>

        )
    }
}

export default withRouter(Releases);
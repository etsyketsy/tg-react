import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReleaseTile from '../ReleaseTile/index.js';
import ReleaseDetail from '../ReleaseDetail/index.js';
import releaseData from '../../assets/releaseData.js';
import ScrollToTop from '../ScrollToTop/index';



class Releases extends Component {
    state = {}

    componentDidMount() {
        this.setState(
            { releases: releaseData }
        )
    }

    // Renders release display grid with all releases if no item is selected
    render() {

        return (
            (!this.state.releases) ?
                <p id='loading'>loading...</p>
                :
                <div className="content" id="releases">
                    <div className="sectionHeader">// Releases</div>
                        {this.state.releases.map(
                            (release, index) => {
                                // Filter out unannounced releases
                                if (release.status != 'Unannounced') {
                                    return (
                                            <ReleaseTile
                                                item={release}
                                                id={release.cat_num}
                                                key={index}
                                            />
                                    )
                                }
                               
                            }
                        )
                        }
                        <ScrollToTop />
                </div>

        )
    }
}

export default withRouter(Releases);
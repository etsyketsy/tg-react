import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReleaseTile from '../ReleaseTile/index.js';
import ReleaseDetail from '../ReleaseDetail/index.js';
import releaseData from '../../assets/releaseData.js';



class Releases extends Component {
    state = {}


    componentDidMount() {
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
                    <div className="sectionHeader">// Releases</div>
                        {this.state.releases.map(
                            (release, index) => {
                                console.log(release.release_date)
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
                </div>

        )
    }
}

export default withRouter(Releases);
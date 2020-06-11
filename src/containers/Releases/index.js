import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReleaseTile from '../ReleaseTile/index.js';
import releaseData from '../../assets/releaseData.js';



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
                    <div className="sectionHeader">Releases</div>
                    <div className="displayGrid">
                        {this.state.releases.map(
                            (release, index) => {
                                return (
                                    // <Link
                                    //     to={{
                                    //         pathname: `/releases/${release.cat_num}/`,
                                    //         state: { release }
                                    //     }}
                                    //     key={index}
                                    // >
                                        <ReleaseTile
                                            item={release}
                                            id={index}
                                            key={index}
                                        />
                                    // </Link>

                                )
                            }
                        )
                        }
                    </div>
                </div>

        )
    }
}

export default withRouter(Releases);
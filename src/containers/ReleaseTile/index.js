import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './index.css';


class ReleaseTile extends Component {

    state = {
        expanded: false
    }

    // getSplitArtistLinks = (props) =>{
    //     (props.item.artist >= 2) ?
    // }

    getSplitArtists = (props) => {
        let artistNiceNames = this.props.item.artist_nice_name.split("_");
        // console.log('split ' + artistLinks)
        // console.log(this.props.item.artist[0][0].toLowerCase())

        artistNiceNames.forEach(
            (niceName) => {
                for (let i = 0; i < this.props.item.artist.length; i++) {
                    for (let j = 0; j < artistNiceNames.length; j++) {
                        let test = this.props.item.artist[j][0].toLowerCase();
                        if (test == niceName[i]) {
                            console.log('it`s a match! ' + niceName + ' ' + this.props.item.artist[j])
                            // return(
                            //     <Link
                            //         to={`/artists/${niceName}/`}
                            //         className='releaseArtistWrapper'
                            //     >
                            //         {this.props.item.artist[i]}
                            //     </Link>
                            // )
                        }
                        // else {
                        //     console.log('try again ' + niceName + ' from these '+this.props.item.artist)
                        //     continue
                        // }
                    }

                }
            }
        )
        // let test = this.props.item.artist[i][0];
        // console.log(test)
        // if (test.toLowerCase() == artist[0]) {

        //     return (
        //         <Link to={`/artists/${artist}`}
        //         >
        //             {this.props.item.artist[i]}
        //         </Link>
        //     )
        // }

    }



    tracksClickHandler = (e) => {
        this.setState(
            { expanded: !this.state.expanded }
        )
    }

    // componentDidMount() {
    //     document.body.style.overflow = "hidden"
    // }

    render() {
        let toggledClass = this.state.expanded ? 'expanded' : 'collapsed';

        return (
            <div className="releaseTile" id={this.props.item.cat_num}>
                <img src={this.props.item.image}
                    alt='releaseCover'
                />
                <div className='releaseDetails'>
                    <div className='releaseHeadline'>
                        <div className='cat_num'>
                            {this.props.item.cat_num}:
                        </div>
                        {(this.props.item.artist.length >= 2) ?
                            this.getSplitArtists()
                            :
                            <Link
                                to={`/artists/${this.props.item.artist_nice_name}/`}
                                className='releaseArtistWrapper'
                            >
                                {this.props.item.artist}
                            </Link>
                        }
                        &nbsp;-&nbsp;
                        <div className='releaseTitle'>
                            {this.props.item.release_title}
                        </div>
                        <div className='releaseFormats'>
                            {this.props.item.release_formats}
                        </div>
                    </div>
                    <div className='releaseBio'>
                        <div className='releaseDate'>
                            <div className='dateHeader'>Released:</div>
                            {this.props.item.release_date}
                        </div>
                        {ReactHtmlParser(this.props.item.bio)}
                    </div>
                    <div className='media'>
                        <div className='mediaPlayer'>
                            {ReactHtmlParser(this.props.item.mediaplayer_html)}
                        </div>
                        <div className='tracks'>
                            <div className='tracksHeader'
                                onClick={this.tracksClickHandler}>
                                {!this.state.expanded ?
                                    'See tracks'
                                    : 'x'}
                            </div>
                            <div className={`tracks ${toggledClass}`}>
                                {ReactHtmlParser(this.props.item.tracklisting)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default ReleaseTile;

import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ReleaseTile extends Component {

    render() {
        console.log(this.props.item)
        return (
            <div id="releaseTile">
                <img src={this.props.item.image}
                    alt='releaseCover'
                />
                <div className='details'>
                    <div className='cat_num'>
                        {this.props.item.cat_num}
                    </div>
                    <div className='releaseArtist'>
                        {this.props.item.artist}
                    </div>
                    <div className='releaseTitle'>
                        {this.props.item.release_title}
                    </div>
                    <div className='bio'>
                        {ReactHtmlParser(this.props.item.bio)}
                    </div>
                </div>

            </div>
        )
    }
}

export default ReleaseTile;

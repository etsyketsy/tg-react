import React, { Component } from 'react';
import './index.css';

class ScrollToTop extends Component {
    state = {
        is_visible: false
    }

    scrollUp() {
        window.scrollTo(0,0)
    }

    componentDidMount() {
        console.log(window.scrollY)
    }

    render() {
        return (
            <div id="scrollButton" onClick={this.scrollUp}>
               &#8593;
            </div>
        )
    }
}

export default ScrollToTop;

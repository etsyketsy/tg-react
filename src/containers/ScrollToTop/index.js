import React, { Component } from 'react';
import './index.css';

class ScrollToTop extends Component {
    state = {
        hasScrolled: false
    }

    scrollUp = () => {
        window.scrollTo(0,0)
        this.setState({ hasScrolled: false })
    }

    onScroll = () => {
        if (window.scrollY > 100 ) {      
          this.setState({ hasScrolled: true })    
          console.log('scrolled')
        } 
      }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll) 
    }


    render() {
        let is_visible = this.state.hasScrolled ? 'visible' : 'hidden';

        return (
            <div id="scrollButton" className={`${is_visible}`} 
            onClick={this.scrollUp}>
               &#8593;
            </div>
        )
    }
}

export default ScrollToTop;

import React, { Component } from 'react';
import LatestReleases from '../LatestReleases/index.js';
import NewsPreview from '../News/NewsPreview.js';
// import About from '../About/index.js';
// import Contact from '../Contact/index.js';
import './index.css';
import ScrollToTop from '../ScrollToTop/index.js';



class Home extends Component {

  render() {
    return (
      <div className="home">
        <NewsPreview />
        <LatestReleases />
        {/* <div id='footer'>
          <About />
          <Contact />
        </div> */}
        <ScrollToTop />
      </div>
    )
  }
}

export default Home;
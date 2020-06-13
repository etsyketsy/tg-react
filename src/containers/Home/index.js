import React, { Component } from 'react';
import ReleasesPreview from '../ReleasesPreview/index.js';
import NewsPreview from '../News/NewsPreview.js';
import About from '../About/index.js';
import Contact from '../Contact/index.js';
import './index.css';



class Home extends Component {

  render() {
    return (
      <div className="home">
        <NewsPreview />
        <ReleasesPreview />
        <About />
        <Contact />
      </div>
    )
  }
}

export default Home;
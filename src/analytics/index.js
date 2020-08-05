import ReactGA from 'react-ga';
import React, { Component, } from "react";

// Initiate Google Analytics tracking
let trackingID = 'UA-174267664-1';
ReactGA.initialize(trackingID);

// Tracking Wrapper code credit goes to @juliaqiuxy 
// https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
const gaTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
        ReactGA.set({
        page,
        ...options,
      });
      ReactGA.pageview(page);
    };
  
    // eslint-disable-next-line
    const HOC = class extends Component {
      componentDidMount() {
        // eslint-disable-next-line
        let page = this.props.location.pathname + this.props.location.search;
        trackPage(page);
      }
  
      componentDidUpdate(prevProps) {
        let currentPage =
          prevProps.location.pathname + prevProps.location.search;
        let nextPage =
          this.props.location.pathname + this.props.location.search;
  
        if (currentPage !== nextPage) {
          trackPage(nextPage);
        }
      }
  
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  
    return HOC;
  };
  
  export default gaTracker;
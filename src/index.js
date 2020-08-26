import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './index.css';
import Home from './containers/Home';
import Releases from './containers/Releases/index.js';
// import ReleaseDetail from './containers/ReleaseDetail/index.js';
import Artists from './containers/Artists/index.js';
import ArtistDetail from './containers/ArtistDetail/index.js';
import News from './containers/News/index.js';
import About from './containers/About/index.js';
import Layout from './containers/Layout/index.js';
import NotFound from './containers/NotFound/index.js';
import gaTracker from './analytics/index.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <Layout id="layout">
            <Switch>
                <Route exact path='/' component={gaTracker(Home)} />
                <Route exact path='/news' component={gaTracker(News)} />
                <Route exact path='/releases' component={gaTracker(Releases)} />
                <Route exact path='/artists' component={gaTracker(Artists)} />
                <Route
                    exact path='/artists/:artist_nice_name'
                    component={gaTracker(ArtistDetail)}
                />
                <Route exact path='/about' component={gaTracker(About)} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Layout>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

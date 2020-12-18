import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/tgArt/tg_triangle_logo.png';
import About from '../About/index.js';
import Contact from '../Contact/index.js';
import './index.css';


class Layout extends Component {

  render() {
    return (
      <div id="layout">
        <div id='header'>

          <Link to="/" replace id="logoWrapper">
            <img src={logo} alt="Logo" id="logoGif" />
          </Link>

          <div id="navLinks">
            <NavLink to="/" activeClassName="active" exact replace>
              <div id="homeLink" className='text'>HOME</div>
            </NavLink>
            <NavLink to="/news" activeClassName="active" exact replace>
              <div className='text'>NEWS</div>
            </NavLink>
            <NavLink to="/releases" activeClassName="active" replace>
              <div className='text'>RELEASES</div>
            </NavLink>
            <NavLink to="/artists" activeClassName="active" replace>
              <div className='text'>ARTISTS</div>
            </NavLink>
            <a href="https://music.twelvegaugehc.com/" target="_blank" rel="noopener noreferrer">
              <div className='text'>MUSIC</div>
            </a>
            <a href="https://deathwishinc.com/collections/twelve-gauge"
              target="_blank" rel="noopener noreferrer">
              <div className='text'>STORE</div>
            </a>

          </div>
        </div>
        <div id='layoutBody'>
          {this.props.children}
        </div>
        <div id='footer'>
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Layout;
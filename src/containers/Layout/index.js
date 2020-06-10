import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.gif';
import './index.css';


class Layout extends Component {

  render() {
    return (
      <div id="layout">
        <div id="logo">
          <Link to="/" replace id="logoWrapper">
            <img src={logo} alt="Logo" id="logoGif" />
          </Link>
        </div>
        <div id="navLinks">

          <NavLink to="/" activeClassName="active" exact replace>
            <div className='text'>HOME</div>
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
          <a href="https://music.tgrex.com/" target="_blank" rel="noopener noreferrer">
            <div className='text'>AUDIO</div>
          </a>
          <NavLink to="/about" activeClassName="active" replace>
            <div className='text'>ABOUT</div>
          </NavLink>
          <a href="https://deathwishinc.com/collections/twelve-gauge"
            target="_blank" rel="noopener noreferrer">
            <div className='text'>STORE</div>
          </a>

        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
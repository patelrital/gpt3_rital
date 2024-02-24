import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo1.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nh__navbar">
      <div className="nh__navbar-links">
        <div className="nh__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="nh__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#subscription">Subscription</a></p>
          <p><a href="#articles">Articles</a></p>
          <p><a href="#features">Features</a></p>
        </div>
      </div>
      <div className="nh__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nh__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="nh__navbar-menu_container scale-up-center">
          <div className="nh__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#nutrihaven">About</a></p>
            <p><a href="#subscription">Subscription</a></p>
            <p><a href="#articles">Articles</a></p>
            <p><a href="#features">Features</a></p>
          </div>
          <div className="nh__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
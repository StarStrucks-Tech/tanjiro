import React from 'react';
import KubairLogo from "../assets/kubair_logo.png";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className='kubair_logo'> <img src= { KubairLogo} alt="kubairlogo" /></div>
        <nav className="nav">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">HOME</a></li>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">BLOGS</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import KubairLogo from "../assets/kubair_logo.png";
import './Header.css';

// Define the types for props if needed, currently empty
interface HeaderProps {}

// Functional component for Header
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      {/* Container for the header content */}
      <div className="container">
        {/* Logo section */}
        <div className='kubair_logo'>
          {/* Logo image with alt text */}
          <img src={KubairLogo} alt="Kubair Logo" />
        </div>
        {/* Navigation menu */}
        <nav className="nav">
          <ul>
            {/* Navigation links */}
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

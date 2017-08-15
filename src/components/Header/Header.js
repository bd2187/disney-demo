import React from 'react';
import './header.css';
import logo from '../../config/logo.png';

function Header() {
  return (
    <div className="logo">
      <img src={logo} alt="Disney logo" />
    </div>
  );
}

export default Header;

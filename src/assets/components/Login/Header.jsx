import React from 'react';
import logo1 from '../../images/Logo1.png';
import './login.css';




const Header = () => {
  return (
    <header className="login-header">
      <img src={logo1} alt="Header Logo" className="header-logo" />
    </header>
  );
};

export default Header;
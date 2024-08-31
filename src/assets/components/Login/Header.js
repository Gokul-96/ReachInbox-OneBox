import React from 'react';
import logo1 from '../../assets/images/header-logo.png';
import '../../styles/login.css';




const Header = () => {
  return (
    <header className="login-header">
      <img src={logo1} alt="Header Logo" className="header-logo" />
    </header>
  );
};

export default Header;
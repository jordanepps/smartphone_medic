import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import ToggleBtn from '../SideDrawer/ToggleBtn';

export default function Header({ drawerHandler }) {
  return (
    <header className="main-header">
      <div className="main-header-container">
        <div>
          <ToggleBtn click={drawerHandler} />
        </div>
        <Link to="/" className="main-logo">
          <img src={Logo} alt="Smartphone Medic Logo" />
        </Link>
        <div className="spacer" />
        <Navigation />
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.png';
import Navigation from '../Navigation/Navigation';
import ToggleBtn from '../SideDrawer/ToggleBtn';
import './Header.css';

export default function Header({ drawerHandler }) {
  const [atTop, setAtTop] = useState(true);

  window.addEventListener('scroll', () =>
    setAtTop(window.pageYOffset > 0 ? false : true)
  );

  return (
    <header className={atTop ? 'main-header' : 'main-header scrolled'}>
      <div className="main-header-container">
        <ToggleBtn click={drawerHandler} />
        <Link to="/" className="main-logo">
          <img src={Logo} alt="Smartphone Medic Logo" />
        </Link>
        <div className="spacer" />
        <Navigation />
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.png';
import './HeaderDashboard.css';

export default function HeaderDashboard() {
  const [atTop, setAtTop] = useState(true);

  window.addEventListener('scroll', () =>
    setAtTop(window.pageYOffset > 0 ? false : true)
  );
  return (
    <header className={atTop ? 'main-header' : 'main-header scrolled'}>
      <div className="main-header-container">
        <Link to="/dashboard" className="main-logo">
          <img src={Logo} alt="Smartphone Medic Logo" />
        </Link>
      </div>
    </header>
  );
}

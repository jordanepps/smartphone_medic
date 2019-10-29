import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../imgs/logo.png';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Smartphone Medic Logo" />
      </Link>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/devices-for-sale">Devices For Sale</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav>
    </header>
  );
}

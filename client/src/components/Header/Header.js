import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/" className="main-logo">
        <img src={Logo} alt="Smartphone Medic Logo" />
      </Link>
      <Navigation />
    </header>
  );
}

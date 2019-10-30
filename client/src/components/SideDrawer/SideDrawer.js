import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css';

export default function SideDrawer({ show }) {
  return (
    <nav className={show ? 'side-drawer open' : 'side-drawer'}>
      <ul>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/devices-for-sale">Devices For Sale</NavLink>
        <NavLink to="/news">News</NavLink>
      </ul>
    </nav>
  );
}

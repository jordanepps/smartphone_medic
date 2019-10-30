import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css';

export default function SideDrawer({ show, close }) {
  return (
    <nav className={show ? 'side-drawer open' : 'side-drawer'}>
      <ul>
        <NavLink exact to="/" onClick={close}>
          Home
        </NavLink>
        <NavLink to="/devices-for-sale" onClick={close}>
          Devices For Sale
        </NavLink>
        <NavLink to="/news" onClick={close}>
          News
        </NavLink>
      </ul>
    </nav>
  );
}

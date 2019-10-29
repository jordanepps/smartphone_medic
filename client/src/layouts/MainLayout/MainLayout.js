import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainLayout({ children }) {
  return (
    <>
      <header>
        LOGO
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/devices-for-sale">Devices For Sale</NavLink>
          <NavLink to="/news">News</NavLink>
        </nav>
      </header>
      {children}
      <footer>Footer</footer>
    </>
  );
}

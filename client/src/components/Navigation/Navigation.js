import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className="main-nav">
      <nav>
        <div>
          <ul>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/devices-for-sale">Devices For Sale</NavLink>
            <NavLink to="/news">News</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

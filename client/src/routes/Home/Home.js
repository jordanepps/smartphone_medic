import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
      Home
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/devices-for-sale">Devices For Sale</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav>
    </div>
  );
}

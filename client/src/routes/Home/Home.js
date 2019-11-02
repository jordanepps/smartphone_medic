import React from 'react';
// import homeImg from '../../imgs/home.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="top-section">
        <div className="home-title">
          <h1>
            Things happen. <br /> We can fix it.
          </h1>
          <span>
            SmartPhone Medic is the smart choice for all of your repair needs
          </span>
        </div>

        <div className="layer" />
        {/* <img src={homeImg} alt="Cracked phone screen" className="home-img" /> */}
      </div>
    </div>
  );
}

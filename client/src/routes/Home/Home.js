import React from 'react';
import './Home.css';
import HomeCardContainer from '../../components/HomeCardContainer/HomeCardContainer';

export default function Home() {
  return (
    <div className="home-container">
      <div className="top-section">
        <div className="home-title">
          <h1>
            Things happen. <br /> We can fix it.
          </h1>
          <span>
            SmartPhone Medic is the smart choice for all of your repair needs.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            tenetur quidem sint itaque adipisci?
          </span>
        </div>
      </div>
      <HomeCardContainer />
    </div>
  );
}

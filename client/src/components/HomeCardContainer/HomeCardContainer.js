import React from 'react';
import './HomeCardContainer.css';
// import HomeCard from '../HomeCard/HomeCard';

function HomeCard() {
  return <div className="home-card"></div>;
}

export default function HomeCardContainer() {
  return (
    <div className="home-card-container">
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div>
  );
}

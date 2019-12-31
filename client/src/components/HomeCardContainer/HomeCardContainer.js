import React from 'react';
import './HomeCardContainer.css';
import HomeCard from '../HomeCard/HomeCard';

export default function HomeCardContainer() {
  return (
    <div className="home-card-container">
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div>
  );
}

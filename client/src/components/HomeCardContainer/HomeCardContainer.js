import React from 'react';
import './HomeCardContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faTools, faAward } from '@fortawesome/free-solid-svg-icons';

function HomeCard({ icon }) {
  return (
    <div className="home-card">
      <FontAwesomeIcon icon={icon} />
      <h4 className="card-title">Test Message</h4>
      <p className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum
        illum qui consequatur distinctio provident.
      </p>
    </div>
  );
}

export default function HomeCardContainer() {
  return (
    <div className="home-card-container">
      <HomeCard icon={faMobile} />
      <HomeCard icon={faTools} />
      <HomeCard icon={faAward} />
    </div>
  );
}

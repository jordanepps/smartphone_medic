import React from 'react';
import './ToggleBtn.css';

export default function ToggleBtn({ click }) {
  return (
    <button className="toggle" onClick={click}>
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
    </button>
  );
}

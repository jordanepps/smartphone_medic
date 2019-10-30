import React from 'react';
import './Backdrop.css';

export default function Backdrop({ click }) {
  return <div className="backdrop" onClick={click} />;
}

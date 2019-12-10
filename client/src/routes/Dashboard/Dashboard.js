import React from 'react';
import './Dashboard.css';
import TokenService from '../../services/token-service';

export default function Dashboard({ history }) {
  const handleLogout = () => {
    TokenService.clearAuthToken();
    history.push('/dashboard');
  };
  return (
    <div>
      <h2>Dashboard Route!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

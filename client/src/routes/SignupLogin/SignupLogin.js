import React, { useState } from 'react';
import Login from '../../components/TabDisplay/Login';
import Signup from '../../components/TabDisplay/Signup';
import './SignupLogin.css';

export default function TabContainer() {
  const [tabIsLogin, setTabIsLogin] = useState(true);

  const handleLoginSelect = () => setTabIsLogin(true);
  const handleSignUpSelect = () => setTabIsLogin(false);

  return (
    <div className="dashboard-form-container">
      <div className="dashboard-form">
        <div className="tab-btn-container">
          <h2
            tabIndex={1}
            className={`tab tab-signup ${!tabIsLogin && 'current-tab'}`}
            onClick={handleSignUpSelect}
          >
            Sign Up
          </h2>
          <h2
            tabIndex={1}
            className={`tab tab-login ${tabIsLogin && 'current-tab'}`}
            onClick={handleLoginSelect}
          >
            Login
          </h2>
        </div>
        {tabIsLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
}

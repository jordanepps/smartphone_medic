import React, { useState } from 'react';
import Login from '../../components/TabDisplay/Login';
import Signup from '../../components/TabDisplay/Signup';
import { Flash } from '../../components/Utils/Utils';
// import AuthApiService from '../../services/auth-api-service';
import './SignupLogin.css';

export default function TabContainer() {
  const [tabIsLogin, setTabIsLogin] = useState(true);
  const [flashMsg, setFlashMsg] = useState('This is a test flash message');

  const handleLoginSelect = () => setTabIsLogin(true);
  const handleSignUpSelect = () => setTabIsLogin(false);

  const handleSignupSubmit = data => {
    !data && setFlashMsg('Passwords do not match');
  };

  return (
    <>
      {/* {flashMsg && <Flash message={flashMsg} />} */}
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
          {tabIsLogin ? <Login /> : <Signup signup={handleSignupSubmit} />}
        </div>
      </div>
    </>
  );
}

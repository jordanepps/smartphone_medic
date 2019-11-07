import React, { useState } from 'react';
import Login from '../../components/TabDisplay/Login';
import Signup from '../../components/TabDisplay/Signup';
import { Flash } from '../../components/Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './SignupLogin.css';

export default function TabContainer() {
  const [tabIsLogin, setTabIsLogin] = useState(true);
  const [flashMsg, setFlashMsg] = useState(null);
  const [flashStatus, setStatus] = useState(null);

  const handleLoginSelect = () => setTabIsLogin(true);
  const handleSignUpSelect = () => setTabIsLogin(false);

  const handleSignupSubmit = data => {
    if (!data) return handleFlash('Passwords do not match', 'danger');
    AuthApiService.postUser(data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleFlash = (msg, status) => {
    setFlashMsg(msg);
    setStatus(status);
  };

  return (
    <>
      <Flash message={flashMsg} status={flashStatus} />
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

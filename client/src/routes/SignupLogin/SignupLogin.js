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
      .then(res => {
        //TODO: get flash status value from backend
        if (res.status !== 201) {
          handleFlash(res.data.msg[0], 'danger');
        } else {
          handleLoginSelect();
          handleFlash(res.data.msg[0], 'success');
          console.log(res);
        }
      })
      .catch(err => console.log('ERR!', err.data.msg));
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

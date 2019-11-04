import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Email, Password, SubmitButton } from '../../components/Utils/Utils';
import './SignupLogin.css';

export default function Login() {
  const [tabIsLogin, setTabIsLogin] = useState(true);

  const handleLoginSelect = () => setTabIsLogin(true);
  const handleSignUpSelect = () => setTabIsLogin(false);

  return (
    <div className="dashboard-form-container">
      <form className="dashboard-form">
        <div className="tab-btn-container">
          <h2
            tabIndex={1}
            class={`tab tab-signup ${!tabIsLogin && 'current-tab'}`}
            onClick={handleSignUpSelect}
          >
            Sign Up
          </h2>
          <h2
            tabIndex={1}
            class={`tab tab-login ${tabIsLogin && 'current-tab'}`}
            onClick={handleLoginSelect}
          >
            Login
          </h2>
        </div>
        <div className="display">
          <Email />
          <Password />
          <SubmitButton value="log in" />
          <div className="form-footer">
            {/* TODO:Place outline around forget Password */}
            <Link>Forgot Password?</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

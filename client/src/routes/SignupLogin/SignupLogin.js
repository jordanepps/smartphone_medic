import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TextInput,
  Email,
  Password,
  VerifyPassword,
  SubmitButton
} from '../../components/Utils/Utils';
import './SignupLogin.css';

function Signup() {
  return (
    <div className="display">
      <TextInput value="Name" />
      <Email />
      <Password />
      <VerifyPassword />
      <SubmitButton value="sign up" />
    </div>
  );
}

function Login() {
  return (
    <div className="display">
      <Email />
      <Password />
      <SubmitButton value="log in" />
      <div className="form-footer">
        <Link>Forgot Password?</Link>
      </div>
    </div>
  );
}

export default function TabContainer() {
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
        {tabIsLogin ? <Login /> : <Signup />}
      </form>
    </div>
  );
}

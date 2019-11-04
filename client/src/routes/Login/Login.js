import React from 'react';
import { Email, Password, SubmitButton } from '../../components/Utils/Utils';

export default function Login() {
  return (
    <div className="dashboard-form-container">
      <form className="dashboard-form">
        <h2>Login</h2>
        <Email />
        <Password />
        <SubmitButton value="log in" />
      </form>
    </div>
  );
}

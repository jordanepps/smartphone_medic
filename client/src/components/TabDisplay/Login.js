import React from 'react';
import { Link } from 'react-router-dom';
import { Email, Password, SubmitButton } from '../Utils/Utils';

export default function Login() {
  const handleLogin = e => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(email.value, password.value);
  };

  return (
    <form className="display" onSubmit={handleLogin}>
      <Email />
      <Password />
      <SubmitButton value="log in" />
      <div className="form-footer">
        <Link to="/">Forgot Password?</Link>
      </div>
    </form>
  );
}

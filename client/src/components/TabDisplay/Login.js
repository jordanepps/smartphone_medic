import React from 'react';
import { Link } from 'react-router-dom';
import { Email, Password, SubmitButton } from '../Utils/Utils';

export default function Login() {
  return (
    <form className="display">
      <Email />
      <Password />
      <SubmitButton value="log in" />
      <div className="form-footer">
        <Link to="/">Forgot Password?</Link>
      </div>
    </form>
  );
}

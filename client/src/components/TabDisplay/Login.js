import React from 'react';
import { Link } from 'react-router-dom';
import { Email, Password, SubmitButton } from '../Utils/Utils';

export default function Login() {
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

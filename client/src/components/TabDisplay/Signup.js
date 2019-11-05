import React, { useState } from 'react';
import {
  TextInput,
  Email,
  Password,
  VerifyPassword,
  SubmitButton
} from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';

export default function Signup() {
  const [flashMsg, setFlashMsg] = useState(null);

  const handleSignupSubmit = e => {
    e.preventDefault();
    const { name, email, password, verify_password } = e.target;
    validatePasswords(password.value, verify_password.value);
    //   AuthApiService.postUser(e);
  };

  const validatePasswords = (password, verify) =>
    setFlashMsg(password === verify ? null : 'Passwords do not match');

  return (
    <form className="display" onSubmit={handleSignupSubmit}>
      <TextInput value="name" />
      <Email />
      <Password />
      <VerifyPassword />
      <SubmitButton value="sign up" />
    </form>
  );
}

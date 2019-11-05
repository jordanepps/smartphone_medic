import React from 'react';
import {
  TextInput,
  Email,
  Password,
  VerifyPassword,
  SubmitButton
} from '../Utils/Utils';

export default function Signup({ signup }) {
  const handleSignup = e => {
    e.preventDefault();
    const { name, email, password, verify_password } = e.target;
    signup(
      validPasswords(password.value, verify_password.value)
        ? { name: name.value, email: email.value, password: password.value }
        : null
    );
  };

  const validPasswords = (password, verify) => password === verify;

  return (
    <form className="display" onSubmit={handleSignup}>
      <TextInput value="name" />
      <Email />
      <Password />
      <VerifyPassword />
      <SubmitButton value="sign up" />
    </form>
  );
}

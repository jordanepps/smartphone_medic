import React from 'react';
import {
  TextInput,
  Email,
  Password,
  VerifyPassword,
  SubmitButton
} from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';

const handleSignupSubmit = e => {
  e.preventDefault();
  AuthApiService.postUser(e);
};
export default function Signup() {
  return (
    <form className="display" onSubmit={handleSignupSubmit}>
      <TextInput value="Name" />
      <Email />
      <Password />
      <VerifyPassword />
      <SubmitButton value="sign up" />
    </form>
  );
}

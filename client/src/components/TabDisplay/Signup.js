import React from 'react';
import {
  TextInput,
  Email,
  Password,
  VerifyPassword,
  SubmitButton
} from '../Utils/Utils';

export default function Signup() {
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

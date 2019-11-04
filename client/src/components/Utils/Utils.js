import React from 'react';
import './Utils.css';

export function Email() {
  return (
    <div className="input-container email">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        id="email"
        required
      />
    </div>
  );
}

export function Password({ reset }) {
  return (
    <div className="input-container password">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="new-password"
        onChange={reset}
        required
      />
    </div>
  );
}

export function VerifyPassword({ reset }) {
  return (
    <div className="input-container verify-password">
      <label htmlFor="verify_password">Verify Password:</label>
      <input
        type="password"
        name="verify_password"
        id="verify_password"
        autoComplete="new-password"
        required
        onChange={reset}
      />
    </div>
  );
}

export function SubmitButton({ value }) {
  return (
    <div className="btn-container submit">
      <input type="submit" value={value} />
    </div>
  );
}
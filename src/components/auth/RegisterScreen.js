import React from 'react';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Registrer</h3>

      <form>
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;

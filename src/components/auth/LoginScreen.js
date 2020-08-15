import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useForm from '../../hook/useForm';
import {
  startGoogleLogin,
  startEmailLogin,
} from '../../redux/actions/authActions';

const LoginScreen = () => {
  // const history = useHistory();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const [formValue, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startEmailLogin(email, password));
    // history.push('/');
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login With Social Networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create New Acount
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
